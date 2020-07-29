import React, {Component} from 'react';
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
                this.props.history.push('/dashboard')
            }
        })
    }

    handleSignup = () => {
        console.log("Route to Signup")
    }

    render () {
        return (
            <div className="login-container">
                <div className="login">
                    <h1>Login Page</h1>
                    {this.state.error ? <h1>Try Again :)</h1> : null}
                    <div>
                        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                            <div>
                                <label>email:</label>
                                <input className="form-field" type="text" name="email" placeholder="enter email" />
                            </div>
                            <div>
                                <label>password:</label>
                                <input className="form-field" type="text" name="password" placeholder="enter password" />
                            </div>
                            <div>
                                <button type="submit" >Login</button>
                            </div>
                        </form>
                        Not a member? <button onClick={this.handleSignup} >Sign Up!</button>
                    </div>
                </div>
                <div className="login-bg-image">
                    <div className="login-overlay">
                        <h2>Justin Jitsu Location Info</h2>
                        <h3>123 Market Street<br/>
                        Seattle, WA 98133<br/>
                        <br/>
                        (206) 206-2062<br/>
                        <br/>
                        Open daily 11am-9pm</h3>
                    </div>
                    <div>
                        <img src="https://c1.staticflickr.com/8/7207/6879287963_b364f49385_b.jpg" width="680px" alt="kids rasslin"/>
                    </div>
                </div>
            </div>
        )
    }
}