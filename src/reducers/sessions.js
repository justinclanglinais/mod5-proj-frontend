export default function manageSessions(state = {
    sessions: [],
  }, action) {
    switch (action.type) {
      case 'ADD_CLASS':
   
        console.log({ sessions: state.sessions.concat(action.payload) });
   
        return { sessions: state.sessions.concat(action.payload) };
   
      default:
        return state;
    }
  }