import React, {Component} from 'react';

export default class InstructorCard extends Component {
    render() {
        const { name, img_url, belt } = this.props.instructor
        return (
            <div>
                <h3>{img_url}</h3>
                <h1>{name}</h1>
                <h3>{belt} belt</h3>
            </div>
        )
    }
}