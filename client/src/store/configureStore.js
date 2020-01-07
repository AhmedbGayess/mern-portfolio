import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import auth from "./reducers/auth";
import post from "./reducers/post";
import posts from "./reducers/posts";
import project from "./reducers/project";
import projects from "./reducers/projects";
import message from "./reducers/message";
import messages from "./reducers/messages";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth,
      post,
      posts,
      project,
      projects,
      message,
      messages
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
