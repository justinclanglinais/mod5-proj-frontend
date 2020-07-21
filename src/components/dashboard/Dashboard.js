import React, {Component} from 'react';
import MyClasses from './MyClasses.js'
import UserInfo from './UserInfo.js'

export default class Dashboard extends Component {
    state = {
        user: {
            
        } 
    }

    loadUser = (userObj) => {
        this.setState({...this.state, user: userObj})
    }

    fetchUser = () => {
        fetch('http://localhost:3000/api/v1/users/1')
        .then(r=>r.json())
        .then(d=>this.loadUser(d))
        // .then(d=>console.log(d))
    }

    componentDidMount = () => {
        this.fetchUser()
    }

    render () {
        return (
            <div>
                <div>
                    {this.state.user.sessions && <MyClasses sessions={this.state.user.sessions}/>}
                </div>
                <div>
                    <UserInfo user={this.state.user}/>
                </div>
            </div>
        )
    }
}