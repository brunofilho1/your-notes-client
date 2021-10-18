import React, {Fragment, useEffect, useState} from 'react';
import '../../styles/notes.scss';
import {Column, Button} from 'rbx';
import {push as Menu} from 'react-burger-menu';
import List from '../notes/list/index';
import Editor from '../notes/editor';
import Search from '../notes/search';
import NotesService from '../../services/notes';

const Notes = (props) => {

    const [notes, setNotes] = useState([]);
    const [current_note, setCurrentNote] = useState({title: "", body: "", id: ""});

 /*    async function findTitle() {
        var titleName = document.querySelector('.ql-editor').firstChild.textContent
        console.log(titleName);
    }
 */
    async function fetchNotes() {
        const response = await NotesService.index();
        if(response.data.length >= 1) {
            setNotes(response.data.reverse()) // da mais nova pra mais velha
            setCurrentNote(response.data[0])
        } else {
          setNotes([]);
        }
    }

    const createNote = async () => {
      await NotesService.create();
      fetchNotes();
    }

    const selectNote = (id) => {
      const note = notes.find((note) => {
        return note._id == id;
      })
      setCurrentNote(note);
    }

    const deleteNote = async (note) => {
      await NotesService.delete(note._id);
      fetchNotes()
    }

    const confirmDelete = async () => {
      
    }

    const updateNote = async (oldNote, params) => {
      const updatedNote = await NotesService.update(oldNote._id, params);
      const index = notes.indexOf(oldNote);
      const newNotes = notes;
      newNotes[index] = updatedNote.data;
      setNotes(newNotes);
      setCurrentNote(updatedNote.data);
    }

    const searchNotes = async (query) => {
      const response = await NotesService.search(query);
      setNotes(response.data);
    }

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <Fragment>
          <Column.Group className="notes" id="notes">
            <Menu 
              pageWrapId={"notes-editor"} 
              isOpen={ props.isOpen }
              onStateChange={(state) => props.setIsOpen(state.isOpen)}
              disableAutoFocus 
              outerContainerId="notes"
              customBurgerIcon={ false }
              customCrossIcon={ false }
            >

            <Column.Group>
              <Column size={10} offset={1}>
                <Search searchNotes={searchNotes} fetchNotes={fetchNotes}/>
              </Column>
            </Column.Group>

              <List
                notes={notes}
                selectNote={selectNote}
                current_note={current_note} 
                createNote={createNote}
                deleteNote={deleteNote}/>
            </Menu>
    
    
            <Column size={12} className="notes-editor" id="notes-editor">
              <Editor
                note={current_note}
                updateNote={updateNote}
              />
            </Column>
          </Column.Group>
        </Fragment>
      )
}

export default Notes;