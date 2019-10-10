import { SEND_MESSAGE } from "../constants/action-types";

export default function sendMessage(state = null, action) {
    console.log('REDUCER - sendMessage');
    console.log('state');
    console.log(state);
    console.log('action');
    console.log(action);

    switch (action.type) {
        case SEND_MESSAGE:
            return action.payload;
        default:
            return state;
    }
}