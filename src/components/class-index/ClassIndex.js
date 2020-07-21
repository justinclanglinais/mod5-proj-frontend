import React from 'react';
import ClassList from './ClassList.js'
import {Route} from 'react-router-dom'

const ClassIndex = ({match,sessions}) => (
    <div>
        <ClassList sessions={sessions}/>
    </div>
)    
export default ClassIndex