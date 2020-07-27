import React, {Component} from 'react';
import ReactPlayer from "react-player"


export default class Topic extends Component {
    render() {
        return (
            <div className="player-wrapper">
                <h3>{this.props.topic.name}</h3>
                <h1><ReactPlayer style={{align:"center"}}url="https://www.youtube.com/watch?v=BMW5hr1ixKQ" /></h1>
            </div>
        )
    }
}