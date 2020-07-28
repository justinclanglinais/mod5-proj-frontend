import React, {Component} from 'react';

export default class InstructorCard extends Component {
    render() {
        const { name, img_url, belt } = this.props.instructor
        return (
            <div>
                <h4>Instructor: {name}</h4>
                <img src={img_url} height="120"/>
            </div>
        )
    }
}