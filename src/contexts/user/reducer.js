import { INCREASE_AGE, DECREASE_AGE, SET_DEFAULT_USER } from "./type";

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case INCREASE_AGE:
            return { ...state, age: state.age + 1 }
        case DECREASE_AGE:
            return { ...state, age: state.age - 1 }
        case SET_DEFAULT_USER:
            state = {...action.payload};
            return state;
        default:
            return state;
    }
}