import React from 'react'
import { BrowserRouter as NavLink } from 'react-router-dom'

export default class Navbar extends React.Component {
    render () {
        const link = {
            width: '100px',
            padding: '12px',
            margin: '0 6px 6px',
            background: 'blue',
            textDecoration: 'none',
            color: 'white',
            }
          
        return (
            <div>
                <NavLink
                    to="/"
                    /* set exact so it knows to only set activeStyle when route is deeply equal to link */
                    exact
                    /* add styling to Navlink */
                    style={link}
                    /* add prop for activeStyle */
                    activeStyle={{
                    background: 'grey'
                    }}
                >Home</NavLink>
                <NavLink to="/login" exact style={link} activeStyle={{background: 'grey'}}>Login</NavLink>
                <NavLink to="/signup" exact style={link} activeStyle={{background: 'grey'}}>Signup</NavLink>
                <NavLink to="/dashboard" exact style={link} activeStyle={{background: 'grey'}}>Dashboard</NavLink>
                <NavLink to="/classes" exact style={link} activeStyle={{background: 'grey'}}>Classes</NavLink>
            </div>
        )
    }
}