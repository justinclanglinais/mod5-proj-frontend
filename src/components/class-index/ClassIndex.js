import React, {Component} from 'react';
import ClassList from './ClassList.js'

export default class ClassIndex extends Component {
    render() {
        return (
            <div>
                <ClassList sessions={this.props.sessions}/>
            </div>
        )
    }
}