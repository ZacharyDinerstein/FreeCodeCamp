export default (state, action) => {

    switch (action.type) {
      case "SET_AMOUNT":
        return {
          ...state,
          totalAmount: action.value
        };
  
      default:
        return state;
    }
  };
  