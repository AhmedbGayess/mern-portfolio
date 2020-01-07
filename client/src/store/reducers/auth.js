const initialState = {
  user: {},
  authenticated: false,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        user: action.payload,
        isAuthenticated: !!action.payload
      };
    case "SET_LOGIN_ERROR":
      return {
        ...state,
        error: "Login Error"
      };
    default:
      return state;
  }
};
