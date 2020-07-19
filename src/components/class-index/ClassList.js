import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import ClassCard from '../ClassCard.js'

export default class ClassList extends Component {

    render() {
        // debugger
        const renderClasses = this.props.sessions.map(s => 
            <Link key={s.id} to={`/classes/${s.id}`}><ClassCard thisSession={s}/></Link>  
        
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
}