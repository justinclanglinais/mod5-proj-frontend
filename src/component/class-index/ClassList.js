import React, {Component} from 'react';
import ClassCard from '../ClassCard.js'

export default class ClassList extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>Showing (NUM) classes for (DATE) for (CATEGORY)</h2>
                </div>
                <div>
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <ClassCard />
                </div>
            </div>
        )
    }
}