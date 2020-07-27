import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'

export default class ClassCard extends Component {
    handleSignUpSession = () => {
        this.props.signUpSession(this.props.thisSession.id)
    }
    render() {
        const { id, time, topic, category, user } = this.props.thisSession
        return (
            <div>
                <div>
                    <Card className="ClassCard" style={{ width: '18rem' }} align='center'>
                        <Card.Body>
                            <Card.Text>{time.toString()}</Card.Text>
                            <Card.Title>{topic.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{category.name}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Instructor: {user.name}</Card.Subtitle>
                            <Link to={`/classes/${id}`}>View Details</Link>
                            <button onClick={this.handleSignUpSession}>Sign Up</button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}