import React, {Component} from 'react';

export default class ClassCard extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3>Day</h3>
                    <h3>Time</h3>
                    <h3>(Duration)</h3>
                    <h2>Topic</h2>
                    <h3>Category</h3>
                    <h3>Instructor</h3>
                </div>
                <div>
                    <button>View Details</button>
                    <button>Sign Up</button>
                </div>
            </div>
        )
    }
}