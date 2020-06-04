const initialState = {
  status: "LOADING"
};
const userReducer = (state, action) => {
  if (action.type === "SET_USER") {
    return {
      ...state,
      status: "DONE_LOADING",
      ...action.user
    };
  }
  return state;
};

export default userReducer;
