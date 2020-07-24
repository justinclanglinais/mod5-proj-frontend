import React from 'react'
import DateTimePicker from 'react-datetime-picker'

export default class AddClass extends React.Component {
    state = {

    }
    // handleDateChange = (e) => {
    //     // console.log(e)
    //     this.setState({
    //         dateTime: e.target.value
    //     })
    //     console.log(this.state.dateTime)
    // }
    handleChange = (e) => {
        this.setState({
            ...this.state, [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render () {
        const {users, topics, categories} = this.props
        return (
            <div>
                <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                    {/* <div>
                        <DateTimePicker onChange={this.handleDateChange}/>
                    </div> */}
                    <div>
                        <label>Topic</label>
                        <select name="topic_id">
                            {topics.map(topic=> {
                                return <option value={topic.id}>{topic.name}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <label>Category</label>
                        <select name="category_id">
                            {categories.map(category=> {
                                return <option value={category.id}>{category.name}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <label>Instructor</label>
                        <select name="user_id">
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