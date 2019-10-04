export default (state, action) => {

  switch (action.type) {
    case "SET_CARD_VALUE":
      return {
        ...state,
        [action.name]: action.value
      };

    default:
      return state;
  }
};
