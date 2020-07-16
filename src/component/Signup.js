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
                            <input type="text" name="name" placeholder="enter your name" />
                        </div>
                        <div>
                            <label>Your Age:</label>
                            <input type="text" name="age" placeholder="enter your age" />
                        </div>
                        <div>
                            <label>Your Image URL:</label>
                            <input type="text" name="img" placeholder="enter your image url" />
                        </div>
                        <div>
                            <label>Your Belt:</label>
                            {/* <input type="text" name="belt" placeholder="enter your belt" /> */}
                            <select>
                                <option value="white">White</option>
                                <option value="grey">Grey</option>
                                <option value="yellow">Yellow</option>
                                <option value="orange">Orange</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                                <option value="purple">Purple</option>
                                <option value="brown">Brown</option>
                                <option value="black">Black</option>
                            </select>
                        </div>
                        <div>
                            <button>Sign Up</button>
                        </div>
                    </form>
                </Fragment>
            </div>
        )
    }
}