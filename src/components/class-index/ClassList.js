import React from 'react';
import {Link} from 'react-router-dom'
import ClassCard from '../ClassCard.js'
import AddClass from './AddClass.js'
import { Container, Row, Col } from 'react-bootstrap'

const ClassList = ({sessions, users, topics, categories, addSession, signUpSession, user}) => {
    const renderClasses = sessions.map(s => 
        <div>
            <ClassCard thisSession={s} signUpSession={signUpSession} user={user} />
            <p></p>
        </div>
    )
    return (
        <div classname="container-row">
            <div classname="card-body">
                <AddClass users={users} topics={topics} categories={categories} addSession={addSession}  />
            </div>
            <div classname="card-buttons">
                <Container>
                    <Row>
                        <h2>Scheduled Classes</h2>
                        <Col align="right">
                            {renderClasses}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default ClassList