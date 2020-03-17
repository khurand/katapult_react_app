import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

// Initial State
const initialState = { hour: 1, minutes: 0, seconds: 0 }
        // { P_minuts: '00', P_seconds: '00' }  

/* create context:
export pour aaporter le context à d'autres components */
export const GlobalContext = createContext(initialState);

/* Provider component:
Pour permettre aux autres commponents d'accéder au globalState, 
on a besoin d'un provider component pour insérer les autres à l'interieur de celui-ci.
Après ça, les autres components deviendront des enfants du provider (prop) */
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function startTimer(){
        dispatch({
            type: 'START_TIMER',
        })
    }
    function pauseTimer(){
        dispatch({
            type: 'PAUSE_TIMER',
        })
    }
    function stopTimer(){
        dispatch({
            type: 'STOP_TIMER',
        })
    }

    // Retourne tout le state et les actions aux components enfants du provider
    return(
        <GlobalContext.Provider value={{
            state,
            startTimer,
            pauseTimer,
            stopTimer
        }}>
            {children}
        </GlobalContext.Provider>
    )
}