import React, {Component, Fragment} from 'react';

export default class Login extends Component {
    
    handleChange = (e) => {
        console.log(e.target.name, e.target.value)
    }

    handleSubmit = () => {
        console.log("Wire up to sign up")
    }

    handleSignup = () => {
        console.log("Route to Signup")
    }

    render () {
        return (
            <div>
                <h1>Login Page</h1>
                <Fragment>
                    <form>
                        <div>
                            <label>email:</label>
                            <input type="text" name="email" onChange={this.handleChange} placeholder="enter email" />
                        </div>
                        <div>
                            <label>password:</label>
                            <input type="text" name="password" onChange={this.handleChange} placeholder="enter password" />
                        </div>
                        <div>
                            <button text="Login" onClick={this.handleSubmit} >Login</button>
                            <button text="Sign Up" onClick={this.handleSignup} >Sign Up</button>
                        </div>
                    </form>
                </Fragment>
            </div>
        )
    }
}