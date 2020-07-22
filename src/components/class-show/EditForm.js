import React from 'react';

export default class EditForm extends React.Component {
    render () {
        return (
            <form onChange={this.handleChange}>
                <label>Topic</label>
                <input type="text"  />
            </form>
        )
    }
}