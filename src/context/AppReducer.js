// How to specify application state changes and response to certain actions to the context
export default (state, action) => {
    switch(action.type) {
        case 'START_TIMER':
            return {
                ...state,
                chronos: // lancer le timer à partir de 60min et 0sec
            }
        case 'PAUSE_TIMER':
            return {
                ...state,
                chronos: // pause le timer 
            }
        case 'STOP_TIMER':
            return {
                ...state,
                chronos: // reset le timer à 60min et 0sec
            } 
        default:
            return state;
    }
}