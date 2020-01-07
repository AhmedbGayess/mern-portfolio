import axios from "axios";

export const getPost = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/posts/${id}`);
    dispatch({
      type: "SET_POST",
      payload: data
    });
  } catch (e) {
    console.log(e);
  }
};

export const createPost = (post, history) => async (dispatch) => {
  try {
    await axios.post("/posts", post);
    history.push("/admin/admin-posts");
  } catch (e) {
    console.log(e);
  }
};

export const editPost = (id, post, history) => async (dispatch) => {
  try {
    await axios.patch(`/posts/${id}`, post);
    history.push("/admin/admin-posts");
  } catch (e) {
    console.log(e);
  }
};

export const deletePost = (id, history) => async (dispatch) => {
  try {
    await axios.delete(`/posts/${id}`);
    history.push("/admin/admin-posts");
  } catch (e) {
    console.log(e);
  }
};

export const addComment = (id, comment) => async (dispatch) => {
  try {
    const { data: savedComment } = await axios.post(`/comments/${id}`, {
      comment,
      publishedAt: Date.now()
    });
    dispatch({
      type: "ADD_COMMENT",
      payload: savedComment
    });
  } catch (e) {
    console.log(e);
  }
};

export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    await axios.delete(`/comments/${postId}/${commentId}`);
    dispatch({
      type: "DELETE_COMMENT",
      payload: commentId
    });
  } catch (e) {
    console.log(e);
  }
};
