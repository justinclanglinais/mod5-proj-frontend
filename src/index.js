

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import App from './App';
import * as serviceWorker from './serviceWorker';
import manageSessions from './reducers/index.js'
import { usePromiseTracker } from "react-promise-tracker";

let store = createStore(manageSessions)

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && 
    <h1>Loading...</h1>
  );  
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <LoadingIndicator/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
