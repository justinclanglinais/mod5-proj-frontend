import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import ClassIndex from './components/class-index/ClassIndex.js'
import Dashboard from './components/dashboard/Dashboard.js'
import ClassShow from './components/class-show/ClassShow.js'
import { Api } from './services/Api.js'



const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = (props) =>
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
    {props.loggedIn ? null : <NavLink to="/login" exact style={link} activeStyle={{background: 'grey'}}>Login</NavLink>}
    {props.loggedIn ? null : <NavLink to="/signup" exact style={link} activeStyle={{background: 'grey'}}>Signup</NavLink>}
    {props.loggedIn ? <NavLink to="/dashboard" exact style={link} activeStyle={{background: 'grey'}}>Dashboard</NavLink> : null }
    {props.loggedIn ? <NavLink to="/classes" exact style={link} activeStyle={{background: 'grey'}}>Classes</NavLink> : null }
    {/* {props.loggedIn ? <NavLink to="/logout" exact style={{...link, background: "darkblue"}} activeStyle={{background: 'grey'}}>Log Out</NavLink> : null } */}
  </div>;

class App extends React.Component {
  state = {
    auth: {
      user: {}
    },
    user: {},
    sessions: [],
    loggedIn: false
  } 

  handleLogin = (user) => {
    const currentUser = { user : user }
    this.setState({
      auth : currentUser,
      loggedIn : true
    })
    console.log("handle login", user)
    localStorage.setItem('token', user.user.id)
  }

  handleLogout = () => {
    this.setState({
      auth: {user: {} },
      loggedIn : false
    })
    localStorage.removeItem('token')
  }

  sendEdit = (classObj) => {
    fetch(`http://localhost:3000/sessions/${classObj.id}`,{
      method : 'PATCH',
      headers : {
        "Content-Type" : "application/json",
        Accept : "application/json"
      },
      body: JSON.stringify(classObj)
    })
    .then(r=>r.json()).then(d=>console.log(d))
  }

  fetchClasses = () => {
    fetch(`http://localhost:3000/sessions`)
    .then(r=>r.json())
    .then(data=>
      this.setState({...this.state, sessions : data})    
    )
  }

  fetchUser = () => {
    fetch('http://localhost:3000/api/v1/users/1')
    .then(r=>r.json())
    .then(d=>
      this.setState({...this.state, user : d})
    )
  }

  componentDidMount = () => {
    this.fetchUser()
    this.fetchClasses()
    const token = localStorage.getItem('token')
    if (token) {
      Api.auth.getCurrentUser().then(data=>{
        const currentUser = { user : data }
        console.log("mount get current", data)
        this.setState({
          auth : currentUser,
          loggedIn : true
        })
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar loggedIn={this.state.loggedIn}/>
            {this.state.loggedIn ? <button onClick={this.handleLogout}>LOG OUT</button> : null}
            <Route exact path="/" render={() => <h1>Jiu-Jitsu Class Management Home Page</h1>} />
            {this.state.loggedIn ? <Route exact path="/dashboard" render={() => <Dashboard user={this.state.auth.user.user} />} /> : null }
            {/* <Route exact path="/dashboard" render={() => <Dashboard user={this.state.auth.user.user} />} /> */}
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" render={props => {
              return <Login {...props} handleLogin={this.handleLogin} />}} />
            <Route exact path="/classes" render={routerProps => <ClassIndex {...routerProps} sessions={this.state.sessions} />} />
            <Route path={`/classes/:id`} render={routerProps => <ClassShow {...routerProps} sessions={this.state.sessions} sendEdit={this.sendEdit}/>} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
