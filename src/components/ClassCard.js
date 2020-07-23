import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'

export default class ClassCard extends Component {
    render() {
        const { id, time, topic, category, user } = this.props.thisSession
        return (
            <div>
                <div>
                    <Card className="ClassCard" style={{ width: '18rem' }} align='center'>
                        <Card.Body className="CardBody">
                            <Card.Title>{topic.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{category.name}</Card.Subtitle>
                            <Card.Text>{time}</Card.Text>
                            <Link to={`/classes/${id}`}>View Details</Link>
                            <Card.Link href="#">Sign Up</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}