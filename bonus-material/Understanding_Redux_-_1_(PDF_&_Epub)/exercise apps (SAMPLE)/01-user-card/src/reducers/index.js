import { INITIAL_STATE } from "../store";

// if no state is provided -> it is  by default like this,
// otherwise, in 'default' case what will it return? as well it
// should return the state when the app is started
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload
      };

    default:
      return state;
  }
};
