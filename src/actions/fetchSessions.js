import { Api } from '../services/Api.js'

export function fetchSessions() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_SESSIONS_REQUEST' });
    fetch(`${Api.API_ROOT}/sessions`)
      .then(response => response.json())
      .then(sessions => dispatch({ type: 'ADD_SESSIONS', sessions }));
  };
}