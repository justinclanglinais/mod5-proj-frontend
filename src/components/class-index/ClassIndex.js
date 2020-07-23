import React from 'react';
import ClassList from './ClassList.js'

const ClassIndex = ({match,sessions}) => (
    <div className="container">
        <div className="container-child">
        </div>
        <div className="class-index-container">
            <ClassList sessions={sessions}/>
        </div>
    </div>
)    
export default ClassIndex