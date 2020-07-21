import React, {Component, Fragment} from 'react';
import { Api } from '../services/Api.js'

export default class Login extends Component {
    state = {
        error: false,
        user: {
            email: '',
            password: ''
        }
    }
    
    handleChange = (e) => {
        this.setState({
            user: {...this.state.user, [e.target.name]: e.target.value}
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        Api.auth.login(this.state.user).then(user => {
            if (user.error) {
                this.setState({error: true})
            } else {
                this.props.handleLogin(user)
                this.props.history.push('/classes')
            }
        })
    }

    handleSignup = () => {
        console.log("Route to Signup")
    }

    render () {
        return (
            <div>
                <h1>Login Page</h1>
                {this.state.error ? <h1>Try Again :)</h1> : null}
                <Fragment>
                    <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                        <div>
                            <label>email:</label>
                            <input type="text" name="email" placeholder="enter email" />
                        </div>
                        <div>
                            <label>password:</label>
                            <input type="text" name="password" placeholder="enter password" />
                        </div>
                        <div>
                            <button type="submit" >Login</button>
                        </div>
                    </form>
                    Not a member? <button onClick={this.handleSignup} >Sign Up!</button>

                </Fragment>
            </div>
        )
    }
}