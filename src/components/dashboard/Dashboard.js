import React, {Component} from 'react';
import MyClasses from './MyClasses.js'
import UserInfo from './UserInfo.js'

export default class Dashboard extends Component {
    render () {
        return (
            <div>
                <div>
                    <h1>Hello, {this.props.user.name}!</h1>
                </div>
                <div className="container">
                    <div className="container-child">
                        {this.props.user.sessions && <MyClasses sessions={this.props.user.sessions} username={this.props.user.name} dashboard={true}/>}
                    </div>
                    <div className="container-child">
                        {this.props.user && <UserInfo user={this.props.user}/>}
                    </div>
                </div>
            </div>
        )
    }
}