// Initial State of the Data Layer
export const initialState = {
  user: null,
};

// Actions for the Data Layer
export const actionTypes = {
  SET_USER: "SET_USER",
};

// Takes Actions and alters the Data layer
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

// Export: reducer
export default reducer;
