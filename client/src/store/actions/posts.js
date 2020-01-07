import axios from "axios";

export const getPosts = (num) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/posts?skip=${num}`);
    dispatch({
      type: "SET_POSTS",
      payload: data
    });
  } catch (e) {
    console.log(e);
  }
};

export const clearPosts = () => ({
  type: "CLEAR_POSTS"
});
