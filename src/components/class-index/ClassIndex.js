import React from 'react';
import ClassList from './ClassList.js'
import Calendar from 'react-calendar'

const ClassIndex = ({match,sessions, users, topics, categories}) => (
    <div className="container">
        <div className="container-child">
            {/* <Calendar /> */}
        </div>
        <div className="class-index-container">
            <ClassList sessions={sessions} users={users} topics={topics} categories={categories} />
        </div>
    </div>
)    
export default ClassIndex