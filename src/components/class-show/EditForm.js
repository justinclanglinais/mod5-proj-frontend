import React from 'react';

export default class EditForm extends React.Component {
    state = {

    }
    componentDidMount = () => {
        this.setState({
            id : this.props.id,
            user_id : this.props.user.id,
            topic_id : this.props.topic.id,
            category_id : this.props.category.id
        })
    }
    handleChange = (e) => {
        this.setState({
            ...this.state.user, [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submitting edit to session...")
        this.props.toggleEdit()
        this.props.sendEdit(this.state)
    }
    render () {
        const {users, topics, categories} = this.props
        return (
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <div>
                    <label>Topic</label>
                    <select name="topic_id" value={this.state.topic_id}>
                        {topics.map(topic=> {
                            return <option value={topic.id}>{topic.name}</option>
                        })}
                    </select>
                </div>
                <div>
                    <label>Category</label>
                    <select name="category_id" value={this.state.category_id}>
                        {categories.map(category=> {
                            return <option value={category.id}>{category.name}</option>
                        })}
                    </select>
                </div>
                <div>
                    <label>Instructor</label>
                    <select name="user_id" value={this.state.user_id}>
                        {users.map(user=> {
                            return <option value={user.id}>{user.name}</option>
                        })}
                    </select>
                </div>
                <div>
                    <button>Save Changes</button>
                </div>
            </form>
        )
    }
}