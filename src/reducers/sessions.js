function sessionsReducer(state = { sessions: [], requesting: false }, action) {
  switch (action.type) {
  
    case 'START_ADDING_SESSIONS_REQUEST':
      return {
        ...state,
        sessions: [...state.sessions],
        requesting: true
      }
  
    case 'ADD_SESSIONS':
      return {
        ...state,
        sessions: action.sessions,
        requesting: false
      }
  
    default:
      return state;
  }
};
