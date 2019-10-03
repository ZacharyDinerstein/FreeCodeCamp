export default (state, action) => {

    
    switch (action.type) {
        case "SET_CARD_VALUE":
        return {
          ...state,
          name: action.newName
        };
  
      default:
        return state;
    }
};
