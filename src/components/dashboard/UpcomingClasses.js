import React, {Component} from 'react';
import ClassCard from '../ClassCard.js'
import { Container, Row, Col } from 'react-bootstrap'

export default class UpcomingClasses extends Component {

    render() {
        const renderClasses = this.props.sessions && this.props.sessions.map(s=>
            <div>
                <ClassCard key={s.id} thisSession={s}/>
                <p></p>
            </div>
        )
        return (
            <div>
                <div>
                    <Container>
                        <Row className="row">
                            <Col align="center">
                                {renderClasses}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}