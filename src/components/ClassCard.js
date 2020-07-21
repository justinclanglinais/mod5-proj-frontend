import React, {Component} from 'react';

export default class ClassCard extends Component {
    render() {
        console.log("in class card",this.props.thisSession)
        // const { time, topic, category, user } = this.props.thisSession
        return (
            <div>
                {/* <div>
                    <h3>{time}</h3>
                    <h3>Time</h3>
                    <h3>(Duration)</h3>
                    <h2>{topic.name}</h2>
                    <h3>{category.name}</h3>
                    <h3>{user.name}</h3>
                </div>
                <div>
                    <button>View Details</button>
                    <button>Sign Up</button>
                </div> */}
            </div>
        )
    }
}