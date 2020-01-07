import axios from "axios";
import setAuthToken from "../../lib/setAuthToken";

export const login = (userData, history) => async (dispatch) => {
  try {
    console.log(userData);
    const { data } = await axios.post("/login", userData);
    localStorage.setItem("token", data.token);
    setAuthToken(data.token);
    dispatch(setCurrentUser(data.token));
    history.push("/admin");
  } catch (e) {
    dispatch({
      type: "SET_LOGIN_ERROR"
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("token");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
  } catch (e) {
    console.log(e);
  }
};

export const setCurrentUser = (decoded) => ({
  type: "SET_CURRENT_USER",
  payload: decoded
});
