import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './component/Login.js'
import Signup from './component/Signup.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Router>
    </div>
  );
}

export default App;
