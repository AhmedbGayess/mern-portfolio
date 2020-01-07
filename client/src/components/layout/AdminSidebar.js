import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";

class AdminSidebar extends React.Component {
  logout = () => {
    this.props.logout();
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="col-2 p-0 pt-5 admin-side">
        <Link to="/admin" className="p-4 pl-5 admin-side-link">
          Dashboard
        </Link>
        <Link to="/admin/admin-posts" className="p-4 pl-5 admin-side-link">
          Posts
        </Link>
        <Link to="/admin/new-post" className="p-4 pl-5 admin-side-link">
          New Post
        </Link>
        <Link to="/admin/my-projects" className="p-4 pl-5 admin-side-link">
          Projects
        </Link>
        <Link to="/admin/new-project" className="p-4 pl-5 admin-side-link">
          New Project
        </Link>
        <Link to="/admin/my-messages" className="p-4 pl-5 admin-side-link">
          Messages
        </Link>
        <p
          className="p-4 pl-5 admin-side-link"
          onClick={this.logout}
          style={{ cursor: "pointer" }}
        >
          Logout
        </p>
      </div>
    );
  }
}

export default connect(
  null,
  { logout }
)(AdminSidebar);
