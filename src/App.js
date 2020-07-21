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
    <NavLink to="/login" exact style={link} activeStyle={{background: 'grey'}}>Login</NavLink>
    <NavLink to="/signup" exact style={link} activeStyle={{background: 'grey'}}>Signup</NavLink>
    <NavLink to="/dashboard" exact style={link} activeStyle={{background: 'grey'}}>Dashboard</NavLink>
    <NavLink to="/classes" exact style={link} activeStyle={{background: 'grey'}}>Classes</NavLink>
  </div>;

class App extends React.Component {
  state = {
    auth: {
      user: {}
    },
    user: {},
    sessions: []
  } 

  handleLogin = (user) => {
    const currentUser = { user : user }
    this.setState({
      auth : currentUser
    })
    localStorage.setItem('token', user.user.id)
  }

  handleLogout = () => {
    this.setState( { auth: {user: {} } } )
    localStorage.removeItem('token')
  }

  fetchClasses = () => {
    fetch(`http://localhost:3000/sessions`)
    .then(r=>r.json())
    .then(d=>
      this.setState({...this.state, sessions : d})    
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
      Api.auth.getCurrentUser().then(data=>console.log("mount app get user", data))
    }
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
            <Route  path="/login" render={props => {
              return <Login {...props} handleLogin={this.handleLogin} />}} />
            <Route exact path="/classes" render={routerProps => <ClassIndex {...routerProps} sessions={this.state.sessions} />} />
            <Route path={`/classes/:id`} render={routerProps => <ClassShow {...routerProps} sessions={this.state.sessions}/>} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
