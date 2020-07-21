import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import ClassIndex from './components/class-index/ClassIndex.js'
import Dashboard from './components/dashboard/Dashboard.js'
import ClassShow from './components/class-show/ClassShow.js'


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
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
    <NavLink to="/signup" exact style={link} activeStyle={{background: 'grey'}}>Signup</NavLink>
    <NavLink to="/dashboard" exact style={link} activeStyle={{background: 'grey'}}>Dashboard</NavLink>
    <NavLink to="/login" exact style={link} activeStyle={{background: 'grey'}}>Login</NavLink>
    <NavLink to="/classes" exact style={link} activeStyle={{background: 'grey'}}>Classes</NavLink>
  </div>;



class App extends React.Component {
  state = {
    user: {},
    sessions: []
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
    .then(data=>
      this.setState({...this.state, user : data}))
  }

  componentDidMount = () => {
    this.fetchClasses()
    this.fetchUser()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" render={() => <h1>Home Page</h1>} />
            <Route exact path="/dashboard" render={() => <Dashboard user={this.state.user} />} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/classes" render={routerProps => <ClassIndex {...routerProps} sessions={this.state.sessions} />} />
            <Route path={`/classes/:id`} render={routerProps => <ClassShow {...routerProps} sessions={this.state.sessions}/>} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
