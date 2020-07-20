import React, {Component} from 'react';
import ClassCard from '../ClassCard.js'

export default class UpcomingClasses extends Component {

    render() {
        console.log(this.props.sessions, "wow")
        return (
            <div>
                <div>
                    <h2>Upcoming Classes:</h2>
                </div>
                <div>
                    {console.log(this.props.sessions, "potato")}
                    {/* {this.props.sessions.map(s=>{
                        return <ClassCard thisSession={s}/>
                    })} */}
                </div>
            </div>
        )
    }
}