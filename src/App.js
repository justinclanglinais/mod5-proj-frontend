import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import ClassIndex from './components/class-index/ClassIndex.js'
import ClassShow from './components/class-show/ClassShow.js'
import Dashboard from './components/dashboard/Dashboard.js'

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
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink to="/signup" exact style={link} activeStyle={{background: 'darkblue'}}>Signup</NavLink>
    <NavLink to="/login" exact style={link} activeStyle={{background: 'darkblue'}}>Login</NavLink>
    <NavLink to="/classes" exact style={link} activeStyle={{background: 'darkblue'}}>Classes</NavLink>
    <NavLink to="/show" exact style={link} activeStyle={{background: 'darkblue'}}>Show</NavLink>
  </div>;



class App extends React.Component {
  state = {
    sessions: []
  } 

  fetchClasses = () => {
      fetch(`http://localhost:3000/sessions`)
      .then(r=>r.json())
      .then(d=>
          // console.log(d)
          this.setState({sessions : d})    
      )
  }

  componentDidMount = () => {
      this.fetchClasses()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" render={() => <h1>Home Page</h1>} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/classes" render={routerProps => <ClassIndex {...routerProps} sessions={this.state.sessions} />} />
            <Route exact path="/show" component={ClassShow} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
