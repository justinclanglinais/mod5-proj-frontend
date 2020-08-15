import React from 'react';
import ClassList from './ClassList.js'
import Calendar from 'react-calendar'

const handleChange = (e) => {
    console.log(e)
}
const ClassIndex = ({ match, sessions, users, topics, categories, addSession, signUpSession, user }) => (
    <div className="container">
        <div className="class-index-calendar">
            <Calendar 
                onChange={handleChange}
            />
        </div>
        <div className="class-index-container">
            <ClassList 
                sessions={sessions} 
                users={users} 
                topics={topics} 
                categories={categories} 
                addSession={addSession} 
                signUpSession={signUpSession} 
                user={user} 
            />
        </div>
    </div>
)    
export default ClassIndex