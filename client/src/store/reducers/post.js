export default (state = {}, action) => {
  switch (action.type) {
    case "SET_POST":
      return action.payload;
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [action.payload, ...state.comments]
      };
    case "DELETE_COMMENT":
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment._id !== action.payload
        )
      };
    default:
      return state;
  }
};
