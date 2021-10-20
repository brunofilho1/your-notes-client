import React, {Fragment} from 'react';
import presentationImage from '../../assets/images/presentation.png';
import Header from '../../components/header';
import {Column, Section, Title, Container} from 'rbx';
import '../../styles/home.scss';
import '../../styles/transition.scss';
import {Link} from 'react-router-dom';

import $ from 'jquery'

const HomeScreen = () => {
    return (
        <Fragment>
            <div className="bodyLoading">
                <div className="loadingTransitionDiv"></div>
            </div>
            <Header/>
            <Section size="medium" className="home">
                <Container>
                    <Column.Group>
                        <Column size={5}>
                            <Title size={2} spaced className="has-text-white">
                                Crie notas facilmente e acesse quando e onde você quiser
                            </Title>
                            <Title size={5} spaced className="has-text-light" subtitle>
                                Com o YourNotes você será capaz de criar anotações online para acessar quando, e de onde você quiser!<br/><br/>
                                Com um editor fácil e prático você será capaz de editar a fonte, tamanho, formatação do texto e muito mais.
                            </Title>
                            <Link to="/register" className="button is-outlined is-white is-large">
                                <strong>Registre-se agora</strong>
                            </Link>
                        </Column>
                        <Column size={6} offset={1}>
                            <img src={presentationImage}/>
                        </Column>
                    </Column.Group>
                </Container>
            </Section>

        </Fragment>
    )
}

$(window).on("mouseover", function() {
    setTimeout(() => {
        $(".bodyLoading").fadeOut(1000);
    }, 1500);
});


export default HomeScreen;