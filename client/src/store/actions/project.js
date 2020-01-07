import axios from "axios";

export const getProject = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/projects/${id}`);
    dispatch({
      type: "SET_PROJECT",
      payload: data
    });
  } catch (e) {
    console.log(e);
  }
};

export const addProject = (project, history) => async (dispatch) => {
  try {
    await axios.post("/projects", project);
    history.push("/admin/my-projects");
  } catch (e) {
    console.log(e);
  }
};

export const editProject = (id, project, history) => async (dispatch) => {
  try {
    await axios.patch(`/projects/${id}`, project);
    history.push("/admin/my-projects");
  } catch (e) {
    console.log(e);
  }
};

export const deleteProject = (id, history) => async () => {
  try {
    await axios.delete(`/projects/${id}`);
    history.push("/admin/my-projects");
  } catch (e) {
    console.log(e);
  }
};
