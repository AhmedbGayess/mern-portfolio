import axios from "axios";

export const getProjects = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/projects");
    dispatch({
      type: "SET_PROJECTS",
      payload: data
    });
  } catch (e) {
    console.log(e);
  }
};
