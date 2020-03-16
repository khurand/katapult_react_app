// How to specify application state changes and response to certain actions to the context
export default (state = 0, action) => {
    switch(action.type) {
        case 'START_TIMER':
            return {
                ...state,
             // lancer le timer à partir de 60min et 0sec
                // chronos: 
            }
        // case 'PAUSE_TIMER':
        //     return {
        //         ...state,
        //      // pause le timer
        //         chronos:  
        //     }
        // case 'STOP_TIMER':
        //     return {
        //         ...state,
        //      // reset le timer à 60min et 0sec
        //         chronos: 
        //     } 
        default:
            return state;
    }
}