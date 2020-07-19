import React, {Component} from 'react';
import UpcomingClasses from './UpcomingClasses.js'
import PastClasses from './PastClasses.js'


export default class MyClasses extends Component {

    render() {
        return (
            <div>
                <div>
                    <h2>My Classes:</h2>
                </div>
                <div>
                    <UpcomingClasses />
                    <PastClasses />
                </div>
            </div>
        )
    }
}