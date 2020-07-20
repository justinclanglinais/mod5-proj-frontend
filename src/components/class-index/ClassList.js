import React from 'react';
import {Link} from 'react-router-dom'
import ClassCard from '../ClassCard.js'

const ClassList = ({sessions}) => {
    const renderClasses = sessions.map(s => 
        <div><Link key={s.id} to={`/classes/${s.id}`}><ClassCard thisSession={s}/></Link></div> 
    )
    return (
        <div>
            <div>
                <h2>`Showing (NUM) classes for (DATE) for (CATEGORY)`</h2>
            </div>
            <div>
                {/* {this.state.sessions.map(session=>{
                    return <ClassCard thisSession={session}/>
                })} */}
                {renderClasses}
            </div>
        </div>
    )
}
export default ClassList