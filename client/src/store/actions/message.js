import axios from "axios";

export const sendMessage = (message) => async () => {
  try {
    await axios.post("/messages", message);
  } catch (e) {
    console.log(e);
  }
};

export const getMessage = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/messages/${id}`);
    dispatch({
      type: "SET_MESSAGE",
      payload: data
    });
  } catch (e) {
    console.log(e);
  }
};

export const deleteMessage = (id, history) => async () => {
  try {
    await axios.delete(`/messages/${id}`);
    history.push("/admin/my-messages");
  } catch (e) {
    console.log(e);
  }
};
