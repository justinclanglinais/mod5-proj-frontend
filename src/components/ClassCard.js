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
                <div className="ClassCard">
                    <Card  style={{ width: '18rem' }} align='center'>
                        {/* <div className="container-row"> */}
                            <div className="card-body">
                                {time} - {category.name.includes("Kids") ? "(45 min)" : "(60 min)"}
                                <h3>{topic.name}</h3>
                                <Card.Title>{category.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Instructor: {user.name}</Card.Subtitle>
                            </div>
                            <div className="card-buttons">
                                <Link to={`/classes/${id}`}>View Details</Link>
                                <button onClick={this.handleSignUpSession}>Sign Up</button>
                            </div>
                        {/* </div> */}
                    </Card>
                </div>
            </div>
        )
    }
}