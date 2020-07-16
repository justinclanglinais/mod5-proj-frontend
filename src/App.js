import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import Login from './component/Login.js'
import Signup from './component/Signup.js'
import ClassIndex from './component/class-index/ClassIndex.js'
import ClassShow from './component/class-show/ClassShow.js'

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

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" render={() => <h1>Home Page</h1>} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/classes" component={ClassIndex} />
        <Route exact path="/show" component={ClassShow} />
      </Router>
    </div>
  );
}

export default App;
