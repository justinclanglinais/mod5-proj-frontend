import React from 'react'
import { connect } from 'react-redux';

class AddClass extends React.Component {
    state = {
        topic_id : 1,
        category_id : 1,
        user_id : 1
    }
    handleChange = (e) => {
        this.setState({
            ...this.state, [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addSession(this.state)
    }
    render () {
        const {users, topics, categories} = this.props
        return (
            <div>
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
                        <button>Add Class</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
      addClass: formData => dispatch({type: 'ADD_CLASS', payload: formData})
    }
  }
export default connect(null, mapDispatchToProps)(AddClass)