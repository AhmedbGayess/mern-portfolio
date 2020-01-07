export default (state = [], action) => {
  switch (action.type) {
    case "SET_PROJECTS":
      return action.payload;
    default:
      return state;
  }
};
