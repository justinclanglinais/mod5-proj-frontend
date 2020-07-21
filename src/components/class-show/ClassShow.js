import React from 'react';
import InstructorCard from './InstructorCard.js'
import ParticipantList from './ParticipantList.js'
import Topic from './Topic.js'

const ClassShow = ({match,sessions}) => {
    {console.log(match,"inside Class Show")}
    {console.log(sessions[match.params.id], "inside class Show")}
    const { id, time , user , category , topic } = sessions[match.params.id - 1]
    return (
        <div>
            <div>
                <h1>Class Show</h1>
                <h2>{category.name} - {time}</h2>
                <h1>{id}</h1>
            </div>
            <div>
                <Topic topic={topic}/>
            </div>
            <div>
                <InstructorCard instructor={user}/>
            </div>
            {/* <div>
                <ParticipantList />
            </div> */}
        </div>
    )
}
export default ClassShow