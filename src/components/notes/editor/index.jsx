import React, { Fragment, useState, useEffect } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import {Input, Button, Help} from 'rbx';

function Editor({note, updateNote}) {
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentContent, setCurrentContent] = useState('');
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    setCurrentTitle(note.title);
    setCurrentContent(note.body);
  }, [note]);

  function handleUpdate(title, body) {
    updateNote(note, { title, body });
  }

   function handleChange(content, delta, source) {
    clearTimeout(timer);
    if (source === 'user') {
      setCurrentContent(content);
      setTimer(setTimeout(() => {
        handleUpdate(currentTitle, content);
      }, 1000));
    }
  } 

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean'],
    ]
  }

  return (
    <Fragment>
      <Input
        color="light"
        id="title"
        placeholder="Insert a Title..."
        rounded={false}
        size="large"
        value={currentTitle}
        onChange={(e) => {
           clearTimeout(timer); 
          setCurrentTitle(e.target.value);
           setTimer(setTimeout(() => { 
            handleUpdate(e.target.value, currentContent);
           }, 1000)); 
        }} 
      />
      <ReactQuill 
        value={currentContent} 
        onChange={handleChange}
        modules={modules}
        />
    </Fragment>
  )
}

export default Editor;