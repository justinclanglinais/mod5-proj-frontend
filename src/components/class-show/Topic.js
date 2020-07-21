import React, {Component} from 'react';

export default class Topic extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.topic.name}</h3>
                <h1>{this.props.topic.vid_url}</h1>
            </div>
        )
    }
}