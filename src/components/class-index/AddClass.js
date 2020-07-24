import React from 'react'

export default class AddClass extends React.Component {
    state = {

    }
    render () {
        const {users, topics, categories} = this.props
        return (
            <div>
                <form>
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