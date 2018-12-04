import React, {useReducer, useEffect } from "react";
import userReducer from "./reducer";
import { INCREASE_AGE, DECREASE_AGE, SET_DEFAULT_USER } from "./type";

const UserContext = React.createContext();

function UserProvider(props) {
    const [state, dispatch] = useReducer(userReducer, {name: "Duong Nguyen", age: 25});

    useEffect(async () => {
        let user = await fetInitialState();
        dispatch({type: SET_DEFAULT_USER, payload: user})
        return;
    }, [])

    return (
        <UserContext.Provider value={{
            user: state,
            decreaseAge: () => dispatch({ type: DECREASE_AGE }),
            increaseAge: () => dispatch({ type: INCREASE_AGE })
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

const delay = ms => new Promise(res => setTimeout(res, ms))


async function fetInitialState() {
    await delay(2000);
    return {
        name: "Duong Nguyen",
        age: 30
    }
}

export { UserContext, UserProvider };