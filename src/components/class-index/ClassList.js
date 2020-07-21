import React from 'react';
import {Link} from 'react-router-dom'
import ClassCard from '../ClassCard.js'

const ClassList = ({sessions}) => {
    const renderClasses = sessions.map(s => 
        <div><Link key={s.id} to={`/classes/${s.id}`}><ClassCard thisSession={s}/></Link></div> 
        // <div><Link key={s.id} to={`/classes/${s.id}`}><h1>{s.topic.name}</h1></Link></div> 
    )
    return (
        <div>
            <div>
                <h2>{`Showing (NUM) classes for (DATE) for (CATEGORY)`}</h2>
            </div>
            <div>
                {renderClasses}
            </div>
        </div>
    )
}
export default ClassList