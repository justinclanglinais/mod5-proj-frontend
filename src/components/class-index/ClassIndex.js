import React from 'react';
import ClassList from './ClassList.js'
import Calendar from 'react-calendar'

// const ClassIndex = ({ match, sessions, users, topics, categories, addSession, signUpSession, user }) => (
    export default class ClassIndex extends React.Component {
    state = {
        date : ''
    }
    handleChange = (e) => {
        console.log(e)
    }
    render () {
        let { match, sessions, users, topics, categories, addSession, signUpSession, user } = this.props
        return (
            <div className="container">
                <div className="class-index-calendar">
                    <Calendar
                        onChange={this.handleChange}
                        value={this.state.date}
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
                    />
                </div>
            </div>
        )
    }
}
