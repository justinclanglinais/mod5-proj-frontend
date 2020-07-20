import React, {Component} from 'react';
import ClassCard from '../ClassCard.js'

export default class UpcomingClasses extends Component {

    render() {
        return (
            <div>
                <div>
                    <h2>Upcoming Classes:</h2>
                </div>
                <div>
                    {this.props.sessions && this.props.sessions.map(s=>{
                        return <ClassCard thisSession={s}/>
                    })}
                </div>
            </div>
        )
    }
}