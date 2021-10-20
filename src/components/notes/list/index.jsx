import React, { Fragment, Redirect } from 'react';
import { Button, Column, Tag, Title, List } from "rbx";
import Moment from 'moment';
import '../../../styles/notes.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function ListNotes(props) {

  const confirmDelete = (item) => {
    var confirm = window.confirm('Você deseja apagar permanentemente essa nota?')
    if(confirm == true) {
      console.log('Confirmo!');
      return props.deleteNote(item)
    } else {
      console.log('Não confirmo.');
    }
  }

  return (
    <Fragment>
{/* 
        <Column.Group breakpoint="">
        <Column size={6} offset={1}>
            Search...
        </Column>
        </Column.Group>
 */}
      <Column.Group breakpoint="">
        <Column size={6} offset={1}>
          <Title size={6}>
            {props.notes.length} Notes
          </Title>
        </Column>

        <Column size={6}>
          <Button state="active" color="custom-purple" outlined size="small" onClick={() => props.createNote()}>
            Notes +
          </Button>
        </Column>

      </Column.Group>
      
      <Column.Group breakpoint="mobile">

      <Column size={10} offset={1}>
          <List className="notes-list">
            {props.notes.map((item, key) =>
              <List.Item key={key} onClick={() => props.selectNote(item._id)} active={item == props.current_note}>
                <Column.Group breakpoint="mobile">
                  <Column size={10}>
                <Title size={6}>

                  {item.title.replace(/(<([^>]+)>)/ig, "").substring(0,25)}
                </Title>
                <Title size={6} subtitle spaced={false}>
                  {item.body.replace(/(<([^>]+)>)/ig, "").substring(0,30)}
                </Title>

                <Column.Group breakpoint="">
                  <Column size={10} offset={0}>
                    <Tag color="dark">
                      {Moment(item.created_at).format('DD/MM/YYYY')}
                    </Tag>
                  </Column>
                  <Column size={2} offset={1} className="column-trash">

                    <a onClick={() => confirmDelete(item)}>
                      <FontAwesomeIcon 
                        icon={faTrash}
                        className="trash" 
                        /* onClick={() => props.deleteNote(item)}  */
                        color="grey"/>
                    </a>

                  </Column>
                </Column.Group>

                  </Column>
                </Column.Group>
                
              </List.Item>
          )}
          </List>
          </Column>

      </Column.Group>

    </Fragment>
 )
}

export default ListNotes; 