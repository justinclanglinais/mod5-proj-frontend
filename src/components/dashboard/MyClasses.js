import React, {Component} from 'react';
import UpcomingClasses from './UpcomingClasses.js'

export default class MyClasses extends Component {

    render() {
        return (
            <div>
                <div>
                    <h2>{this.props.username.split(' ')[0]}'s Upcoming Classes:</h2>
                </div>
                <div>
                    {this.props.sessions && <UpcomingClasses sessions={this.props.sessions} dashboard={this.props.dashboard}/>}
                    {/* <PastClasses /> */}
                </div>
            </div>
        )
    }
}