import React, {Component, Fragment} from 'react';

export default class Signup extends Component {
    
    handleChange = (e) => {
        console.log(e.target.name, e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    handleSignup = () => {
        console.log("Route to Signup")
    }

    render () {
        return (
            <div>
                <h1>Signup Page</h1>
                <Fragment>
                    <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                        <div>
                            <label>Email:</label>
                            <input type="text" name="email" placeholder="enter email" />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="text" name="password" placeholder="enter password" />
                        </div>
                        <div>
                            <label>Your Name:</label>
                            <input type="text" name="password" placeholder="enter password" />
                        </div>
                        <div>
                            <button type="submit" >Login</button>
                            <button onClick={this.handleSignup} >Sign Up</button>
                        </div>
                    </form>
                </Fragment>
            </div>
        )
    }
}