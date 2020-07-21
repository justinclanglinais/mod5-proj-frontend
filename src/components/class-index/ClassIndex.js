import React from 'react';
import ClassList from './ClassList.js'

const ClassIndex = ({match,sessions}) => (
    <div>
        <ClassList sessions={sessions}/>
    </div>
)    
export default ClassIndex