import React from 'react';

export default class EditForm extends React.Component {
    state = {

    }
    handleChange = (e) => {
        this.setState({
            ...this.state.user, [e.target.name]: e.target.value, id: this.props.id
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submitting edit to class...")
        this.props.toggleEdit()
        // this.props.sendEdit(this.state)
        console.log(this.state)
    }
    render () {
        return (
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <div>
                    <label>Topic</label>
                    <select name="topic_id">
                        <option value="1">Guard</option>
                        <option value="2">Side Control</option>
                        <option value="3">Kneeride</option>
                        <option value="4">Back Mount</option>
                    </select>
                </div>
                <div>
                    <label>Category</label>
                    <select name="category_id">
                        <option value="1">Kids 5-10</option>
                        <option value="2">Kids 11-15</option>
                        <option value="3">Adults Fundamentals</option>
                        <option value="4">Adults Advanced</option>
                    </select>
                </div>
                <div>
                    <label>Instructor</label>
                    <select name="user_id">
                        <option value="1">Justin Langlinais</option>
                        <option value="2">Lucy Langlinais</option>
                        <option value="3">Ashton Ellis</option>
                        <option value="4">Steven Parsons</option>
                    </select>
                </div>
                <div>
                    <button>Save Changes</button>
                </div>
            </form>
        )
    }
}