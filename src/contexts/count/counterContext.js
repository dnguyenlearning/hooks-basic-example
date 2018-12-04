import React, { useReducer } from "react";
import countReducer from "./reducer";
import {INCREASE_COUNT, DECREASE_COUNT} from "./type";

const CountContext = React.createContext();

function CountProvider(props) {
    const initialState = fetInitialState();
    
    const [state, dispatch] = useReducer(countReducer, initialState)
    return (
        <CountContext.Provider value={{
            count: state.count,
            decreaseCount: () => dispatch({type: DECREASE_COUNT}),
            increaseCount: () => dispatch({type: INCREASE_COUNT})
        }}>
            {props.children}
        </CountContext.Provider>
    )
}

function fetInitialState(){
    return {
       count: 0
    }
}

export { CountContext, CountProvider };