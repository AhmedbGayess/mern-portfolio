import axios from "axios";

export const getMessages = (num) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/messages?skip=${num}`);
    dispatch({
      type: "SET_MESSAGES",
      payload: data
    });
  } catch (e) {
    console.log(e);
  }
};

export const clearMessages = () => ({
  type: "CLEAR_MESSAGES"
});
