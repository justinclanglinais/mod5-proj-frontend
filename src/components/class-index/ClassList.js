import React from 'react';
import {Link} from 'react-router-dom'
import ClassCard from '../ClassCard.js'
import { Container } from 'react-bootstrap'

const ClassList = ({sessions}) => {
    const renderClasses = sessions.map(s => 
        // <div><Link key={s.id} to={`/classes/${s.id}`}><ClassCard thisSession={s}/></Link></div>
        <ClassCard thisSession={s}/>
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