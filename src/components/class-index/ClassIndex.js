import React from 'react';
import ClassList from './ClassList.js'
import ClassShow from '../class-show/ClassShow.js'
import {Route} from 'react-router-dom'

const ClassIndex = ({match,sessions}) => (
    <div>
        <ClassList sessions={sessions}/>
        <Route path={`${match.url}/:id`} render={routerProps => <ClassShow {...routerProps} sessions={sessions}/>} />
    </div>
)    
export default ClassIndex