import React, {Component, Fragment} from 'react';

export default class Login extends Component {
    
    handleChange = (e) => {
        console.log(e.target.name, e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("Wire up to login")
    }

    handleSignup = () => {
        console.log("Route to Signup")
    }

    render () {
        return (
            <div>
                <h1>Login Page</h1>
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