import React, {Component} from 'react';
import MyClasses from './MyClasses.js'
import UserInfo from './UserInfo.js'

export default class Dashboard extends Component {
    render () {
        return (
            <div>
                <div>
                    {this.props.user.sessions && <MyClasses sessions={this.props.user.sessions}/>}
                    <MyClasses sessions={this.props.user.sessions}/>

                </div>
                <div>
                    <UserInfo user={this.props.user}/>
                </div>
            </div>
        )
    }
}