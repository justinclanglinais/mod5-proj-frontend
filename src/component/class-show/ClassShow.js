import React, {Component} from 'react';
import InstructorCard from './InstructorCard.js'
import ParticipantList from './ParticipantList.js'
import Topic from './Topic.js'

export default class ClassShow extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Class Show</h1>
                </div>
                <div>
                    <InstructorCard />
                </div>
                <div>
                    <ParticipantList />
                </div>
                <div>
                    <Topic />
                </div>
            </div>
        )
    }
}