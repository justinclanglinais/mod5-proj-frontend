import React from 'react';
import InstructorCard from './InstructorCard.js'
import ParticipantList from './ParticipantList.js'
import Topic from './Topic.js'

const ClassShow = ({match,sessions}) => {
    {console.log(match,"inside Class Show")}
    {console.log(sessions[match.params.id], "inside class Show")}
    const { time , user , category , topic } = sessions[match.params.id]
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
export default ClassShow