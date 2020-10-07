import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import ClassIndex from './components/class-index/ClassIndex.js'
import Dashboard from './components/dashboard/Dashboard.js'
import ClassShow from './components/class-show/ClassShow.js'
import { Api } from './services/Api.js'
import { trackPromise } from 'react-promise-tracker';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'black',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = (props) =>
  <div className="navigation">
    {props.loggedIn ? null : <NavLink to="/login" exact style={link} activeStyle={{background: 'grey'}}>Login</NavLink>}
    {props.loggedIn ? null : <NavLink to="/signup" exact style={link} activeStyle={{background: 'grey'}}>Signup</NavLink>}
    {props.loggedIn ? <NavLink to="/dashboard" exact style={link} activeStyle={{background: 'grey'}}>Dashboard</NavLink> : null }
    {props.loggedIn ? <NavLink to="/classes" exact style={link} activeStyle={{background: 'grey'}}>Classes</NavLink> : null }
  </div>;

class App extends React.Component {
  state = {
    auth: {
      user: {}
    },
    sessions: [],
    topics: [],
    categories: [],
    users: [],
    loggedIn: false
  } 

  handleLogin = (user) => {
    const currentUser = { user : user }
    this.setState({
      auth : currentUser,
      loggedIn : true
    })
    localStorage.setItem('token', user.user.id)
  }

  handleLogout = () => {
    this.setState({
      auth: {user: {} },
      loggedIn : false
    })
    localStorage.removeItem('token')
  }
  
  sendEdit = (session) => {
    fetch(`http://localhost:3000/sessions/${session.id}`,{
      method : 'PATCH',
      headers : {
        "Content-Type" : "application/json",
        Accept : "application/json"
      },
      body: JSON.stringify(session)
    })
    .then(r=>r.json())
    .then(d=> Api.sessions.fetchSessions())
    .then(d=>this.setState({
      sessions: d
    }))
  }
  
  addSession = (classObj) => {
    Api.sessions.addSession(classObj)
    .then(d=> Api.sessions.fetchSessions())
    .then(data=>{
      this.setState({
        sessions: data
      })
    })
  }

  signUpSession = (sessionId) => {
    Api.enrollments.addEnrollment(sessionId, this.state.auth.user.user.id)
    .then(d=> Api.auth.getCurrentUser()
    .then(data=>{
      const currentUser = { user : data }
      this.setState({
        auth : currentUser,
        loggedIn : true
      })
    })
    )
  }
  
  deleteSession = (id) => {
    Api.sessions.deleteSession(id)
    .then(d => Api.sessions.fetchSessions())
    .then(data=>{
      this.setState({
        sessions: data
      })
    })
  }

  deleteEnrollment = (id) => {
    let session = this.state.auth.user.user.sessions.find(s => s.session_id === id)
    Api.enrollments.deleteEnrollment(session.id)
    .then(d=> Api.auth.getCurrentUser()
    .then(data=>{
      const currentUser = { user : data }
      this.setState({
        auth : currentUser,
        loggedIn : true
      })
    })
    )
  }

  fetchAllData = () => {
    Api.sessions.fetchSessions().then(data=>{
      this.setState({
        sessions: data
      })
    })
    Api.users.fetchUsers().then(data=>{
      this.setState({
        users: data
      })
    })
    Api.topics.fetchTopics().then(data=>{
      this.setState({
        topics: data
      })
    })
    Api.categories.fetchCategories().then(data=>{
      this.setState({
        categories: data
      })
    })
  }
  
  componentDidMount = () => {
    const token = localStorage.getItem('token')
    if (token) {
      trackPromise(
      Api.auth.getCurrentUser().then(data=>{
        const currentUser = { user : data }
        this.setState({
          auth : currentUser,
          loggedIn : true
        })
      })
      )
    }
    this.fetchAllData()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar loggedIn={this.state.loggedIn}/>
            {this.state.loggedIn ? <button onClick={this.handleLogout}>LOG OUT</button> : null}
            <Route exact path="/" render={() => <h1>Jiu-Jitsu Class Management Home Page</h1>} />
            {this.state.loggedIn ? <Route exact path="/dashboard" render={() => <Dashboard user={this.state.auth.user.user} deleteEnrollment={this.deleteEnrollment} />} /> : null }
            <Route exact path="/signup" render={routerProps => <Signup {...routerProps} handleLogin={this.handleLogin} />} />
            <Route exact path="/login" render={props => {
              return <Login {...props} handleLogin={this.handleLogin} />}
              } />
            {this.state.loggedIn ? <Route exact path="/classes" render={routerProps => <ClassIndex {...routerProps} sessions={this.state.sessions} users={this.state.users} topics={this.state.topics} categories={this.state.categories} addSession={this.addSession} signUpSession={this.signUpSession} user={this.state.auth.user.user} />} /> : null }
            <Route path={`/classes/:id`} render={routerProps => <ClassShow {...routerProps} sessions={this.state.sessions} sendEdit={this.sendEdit} users={this.state.users} topics={this.state.topics} categories={this.state.categories} signUpSession={this.signUpSession} deleteSession={this.deleteSession} />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
