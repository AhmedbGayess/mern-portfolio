export default (state = {}, action) => {
  switch (action.type) {
    case "SET_PROJECT":
      return action.payload;
    default:
      return state;
  }
};
