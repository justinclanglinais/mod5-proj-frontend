import React, {Component} from 'react';

export default class InstructorCard extends Component {
    render() {
        const { name, img_url, belt } = this.props.instructor
        return (
            <div>
                <img src={img_url} height="120"/>
                <h1>{name}</h1>
                (belt image)
                <h3>{belt} belt</h3>
            </div>
        )
    }
}