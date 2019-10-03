// type/payload is a better combination -> easier later with reducers as
// they might have 100 lines and it's cleaer when you know that each action
// returns the type / payload pair
export const setName = newName => ({ type: "SET_NAME", payload: newName });
