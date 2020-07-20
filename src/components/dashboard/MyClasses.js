import React, {Component} from 'react';
import UpcomingClasses from './UpcomingClasses.js'
import PastClasses from './PastClasses.js'


export default class MyClasses extends Component {

    render() {
        console.log(this.props.sessions)
        return (
            <div>
                <div>
                    <h2>My Classes:</h2>
                </div>
                <div>
                    <UpcomingClasses sessions={this.props.sessions}/>
                    <PastClasses />
                </div>
            </div>
        )
    }
}