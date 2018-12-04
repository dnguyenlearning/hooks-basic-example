import { INCREASE_COUNT, DECREASE_COUNT } from "./type";

export default function userReducer(state, action) {
    switch (action.type) {
        case INCREASE_COUNT:
            return { count: state.count + 1 }
        case DECREASE_COUNT:
            return { count: state.count - 1 }
        default:
            return state;
    }
}