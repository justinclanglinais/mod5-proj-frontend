import React from 'react';
import ClassList from './ClassList.js'
import Calendar from 'react-calendar'

// const ClassIndex = ({ match, sessions, users, topics, categories, addSession, signUpSession, user }) => (
export default class ClassIndex extends React.Component {
    state = {
        filter : ''
    }
    handleFilter = (e) => {
        this.setState({
            filter: e
        })
    }
    render () {
        let { sessions, users, topics, categories, addSession, signUpSession, user } = this.props
        return (
            <div className="container">
                <div className="class-index-calendar">
                    <Calendar
                        onChange={this.handleFilter}
                        value={this.state.filter}
                    />
                </div>
                <div className="class-index-container">
                    <ClassList 
                        sessions={sessions} 
                        users={users} 
                        topics={topics} 
                        categories={categories} 
                        addSession={addSession} 
                        signUpSession={signUpSession} 
                        user={user} 
                        filter={this.state.filter}
                    />
                </div>
            </div>
        )
    }
}
