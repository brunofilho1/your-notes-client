import React, {Fragment} from 'react';
import Header from '../../../components/header';
import {Column, Section, Title, Container, Card} from 'rbx';
import logoImage from '../../../assets/images/yourNotes-logo.png';
import '../../../styles/auth.scss';
import '../../../styles/waves.scss';
import RegisterForm from '../../../components/auth/register_form'


const RegisterScreen = () => {
    return (
        <Fragment>
            <Header/>
                <Section size="medium" className="auth">
                    <Container>
                    <Column.Group centered>
                        <Column size={5}>
                            <Card>
                                <Card.Content>

                                    <Section>
                                        <Column.Group centered>
                                            <Column size={8}>
                                            <img src={logoImage}/>
                                            </Column>
                                            </Column.Group>

                                        <Column.Group>
                                            <Column size={12}>
                                            <Title size={6} className="has-text-grey has-text-centered">
                                                Suas ideias na nuvem!
                                                </Title>
                                            </Column>
                                        </Column.Group>
                                        <RegisterForm/>
                                    </Section> 

                                </Card.Content>
                            </Card>
                        </Column>
                    </Column.Group>
                    </Container>
                    <section className="waveSection">
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
            </section>
                </Section> 
        </Fragment>
    )
}

export default RegisterScreen;