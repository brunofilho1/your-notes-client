import React, {Fragment, useState} from 'react';
import HeaderLogged from '../../../components/header_logged';
import HeaderEditor from '../../../components/header_editor';
import Notes from '../../../components/notes';

const NotesScreen = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Fragment>
            <HeaderEditor setIsOpen={setIsOpen}/>
            <Notes setIsOpen={setIsOpen} isOpen={isOpen}/>
        </Fragment>
    )
}

export default NotesScreen;