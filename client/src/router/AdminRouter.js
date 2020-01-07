import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard";
import AdminSidebar from "../components/layout/AdminSidebar";
import EditPostPage from "../pages/EditPost";
import Messages from "../pages/Messages";
import Message from "../pages/Message";
import EditProject from "../pages/EditProject";
import Projects from "../pages/Projects";
import Posts from "../pages/Posts";

const AdminRouter = () => (
  <div className="row h-100">
    <PrivateRoute
      path={[
        "/admin",
        "/admin/new-post",
        "/admin/edit-post/:id",
        "/admin/admin-posts",
        "/admin/new-project",
        "/admin/edit-project/:id",
        "/admin/my-projects",
        "/admin/my-messages",
        "/admin/admin-message/:id"
      ]}
      component={AdminSidebar}
      exact
    />
    <div className="col">
      <Switch>
        <PrivateRoute path="/admin" component={Dashboard} exact />
        <PrivateRoute path="/admin/new-post" component={EditPostPage} exact />
        <PrivateRoute
          path="/admin/edit-post/:id"
          component={EditPostPage}
          exact
        />
        <PrivateRoute path="/admin/admin-posts" component={Posts} exact />
        <PrivateRoute path="/admin/new-project" component={EditProject} exact />
        <PrivateRoute
          path="/admin/edit-project/:id"
          component={EditProject}
          exact
        />
        <PrivateRoute path="/admin/my-projects" component={Projects} exact />
        <PrivateRoute path="/admin/my-messages" component={Messages} exact />
        <PrivateRoute
          path="/admin/admin-message/:id"
          component={Message}
          exact
        />
      </Switch>
    </div>
  </div>
);

export default AdminRouter;
