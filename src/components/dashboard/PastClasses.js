import React, {Component} from 'react';
import ClassCard from '../ClassCard.js'

export default class PastClasses extends Component {

    render() {
        return (
            <div>
                <div>
                    <h2>Past Classes:</h2>
                </div>
                <div>
                    <p>past classes listed</p>
                    <ClassCard />
                </div>
            </div>
        )
    }
}