import { contacts } from "../static-data";

export default (state = contacts, action) => {
  console.log('CONTACTS REDUCER - state');
  console.log(state);
  return state;
};