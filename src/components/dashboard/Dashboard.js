import React, {Component} from 'react';
import MyClasses from './MyClasses.js'
import UserInfo from './UserInfo.js'

export default class Dashboard extends Component {
    // state = {
    //     user: {

    //     }
    // }

    // loadUser = (userObj) => {
    //     this.setState({...this.state, user: userObj})
    // }

    // filterUserSessions = (sessions) => {
    //     sessions.select(s=>{
            
    //     })
    // }

    // loadUserSessions = (sessionsObj) => {
    //     this.setState({...this.state, sessions: sessionsObj})
    // }

    // fetchUser = () => {
    //     fetch('http://localhost:3000/api/v1/users/1')
    //     .then(r=>r.json())
    //     .then(d=>this.loadUser(d))
    // }

    // fetchUserSessions = () => {
    //     fetch('http://localhost:3000/sessions')
    //     .then(r=>r.json())
    //     .then(d=>this.filterUserSessions(d))
    // }

    // componentDidMount = () => {
    //     this.fetchUser()
    // }

    render () {
        return (
            <div>
                <div>
                    <MyClasses sessions={this.props.user.sessions}/>
                </div>
                <div>
                    <UserInfo user={this.props.user}/>
                </div>
            </div>
        )
    }
}