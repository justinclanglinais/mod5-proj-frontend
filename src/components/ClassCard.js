import React, {Component} from 'react';

export default class ClassCard extends Component {
    render() {
        const { id, time, topic, category, user } = this.props.thisSession
        return (
            <div>
                <div>
                    <h3>{time}</h3>
                    <h3>{id}</h3>
                    <h3>Duration: {category.name.includes("Kids") ? "45 minutes" : "60 minutes"}</h3>
                    <h2>{topic.name}</h2>
                    <h3>{category.name}</h3>
                    <h3>{user.name}</h3>
                </div>
                <div>
                    <button>View Details</button>
                    <button>Sign Up</button>
                </div>
            </div>
        )
    }
}