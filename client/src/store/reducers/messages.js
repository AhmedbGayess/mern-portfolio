export default (state = [], action) => {
  switch (action.type) {
    case "SET_MESSAGES":
      return [...state, ...action.payload];
    case "CLEAR_MESSAGES":
      return [];
    default:
      return state;
  }
};
