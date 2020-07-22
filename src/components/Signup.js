import React, {Component, Fragment} from 'react';
let localUsersAPI = "http://localhost:3000/api/v1/users"

export default class Signup extends Component {
    state = {
        user: {
            email: '',
            password: '',
            isAdmin: true,
            name: '',
            age: '',
            img_url: '',
            belt: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            user: {...this.state.user, [e.target.name]: e.target.value}
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const user = {...this.state}
        this.addUser(user)
    }

    handleSignup = () => {
        console.log("Route to Signup")
    }

    addUser = user => {
        fetch(localUsersAPI, {
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(user)
        })
        .then( resp => resp.json())
        .then( data => console.log(data))
    }

    render () {


        return (
            <div className="Head">
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
                            <input type="text" name="img_url" placeholder="enter your image url" />
                        </div>
                        <div>
                            <label>Your Belt:</label>
                            <select name="belt">
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