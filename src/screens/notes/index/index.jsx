import React, {Fragment, useState} from 'react';
import HeaderLogged from '../../../components/header_logged';
import HeaderEditor from '../../../components/header_editor';
import Notes from '../../../components/notes';
import $ from 'jquery';

const NotesScreen = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Fragment>
            <div className="bodyLoading">
                <div className="loadingTransitionDiv"></div>
            </div>
            <HeaderEditor setIsOpen={setIsOpen}/>
            <Notes setIsOpen={setIsOpen} isOpen={isOpen}/>
        </Fragment>
    )
}

$(window).on("mouseover", function() {
    setTimeout(() => {
        $(".bodyLoading").fadeOut(1000);
    }, 1000);
});

export default NotesScreen;