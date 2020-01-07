export default (state = [], action) => {
  switch (action.type) {
    case "SET_POSTS":
      return [...state, ...action.payload];
    case "CLEAR_POSTS":
      return [];
    default:
      return state;
  }
};
