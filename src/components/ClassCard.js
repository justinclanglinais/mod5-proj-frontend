import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import {Card} from 'react-bootstrap'

export default class ClassCard extends Component {
    render() {
        const { id, time, topic, category, user } = this.props.thisSession
        return (
            <div>
                <Card style={{ width: '18rem' }} align='center'>
                    <Card.Body>
                        <Card.Title>{topic.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{category.name}</Card.Subtitle>
                        <Card.Text>{time}</Card.Text>
                        <Link to={`/classes/${id}`}>View Details</Link>
                        <Card.Link href="#">Sign Up</Card.Link>
                    </Card.Body>
                </Card>
                {/* <div>
                    <h3>{time}</h3>
                    <h3>{id}</h3>
                    <h3>Duration: {category.name.includes("Kids") ? "45 minutes" : "60 minutes"}</h3>
                    <h2>{topic.name}</h2>
                    <h3>{category.name}</h3>
                    <h3>{user.name}</h3>
                </div>
                <div>
                    <button>View Details</button>
                    <button>Sign Up</button>
                </div> */}
            </div>
        )
    }
}