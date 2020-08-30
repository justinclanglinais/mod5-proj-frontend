import React from 'react';
import ClassCard from '../ClassCard.js'
import AddClass from './AddClass.js'
import { Container, Row, Col } from 'react-bootstrap'
import {TimeConverter} from '../../services/TimeConverter.js'


const ClassList = ({ sessions, users, topics, categories, addSession, signUpSession, user, filter }) => {
    const filterDate = () => {
        let arr = filter.split(" ")
        console.log(TimeConverter.getTime(filter))
    }
    const renderClasses = sessions.map(s => 
        // if s.time.includes(TimeConverter.getDate(filter)) {
            <div>
                <ClassCard 
                    thisSession={s} 
                    signUpSession={signUpSession} 
                    user={user} 
                />
                <p></p>
            </div>
        // }
    )
    return (
        <div classname="container-row">
            <div classname="card-body">
                <AddClass 
                    users={users} 
                    topics={topics} 
                    categories={categories} 
                    addSession={addSession}
                />
            </div>
            <div classname="card-buttons">
                <Container>
                    <Row>
                        <h2>Scheduled Classes</h2>
                        <Col align="right">
                            {sessions && renderClasses}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default ClassList