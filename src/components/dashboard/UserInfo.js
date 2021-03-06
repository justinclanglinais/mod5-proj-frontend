import React, {Component} from 'react';

export default class UserInfo extends Component {
    
    render () {
        const { name , age , img_url , belt } = this.props.user
        return (
            <div>
                <h1>Student Profile</h1>
                <div>
                    <img src={img_url} alt="student" height="240"></img>
                </div>
                <div>
                    <h2>{name}</h2>
                    <h3>{age}</h3>
                </div>
                <div>
                    <h3>{belt} belt</h3>
                </div>
                <div>
                    <h2>Achievements:</h2>
                </div>
            </div>
        )
    }
}