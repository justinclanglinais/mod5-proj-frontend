export default (state = [], action) => {
    let idx
    switch (action.type) {
        case 'ADD_SESSION':
            return [...state , action.session]
        default:
            return state
    }
}