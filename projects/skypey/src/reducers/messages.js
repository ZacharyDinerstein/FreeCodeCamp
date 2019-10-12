import { getMessages } from "../static-data";
import { SEND_MESSAGE } from "../constants/action-types";
const _ = require("lodash");

export default function messages(state = getMessages(10), action) {
  console.log('MESSAGES REDUCER - STATE');
  console.log(state);

  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId];
      const number = +_.keys(allUserMsgs).pop() + 1;

      return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true
          }
        }
      };

    default:
      return state;
  }
}