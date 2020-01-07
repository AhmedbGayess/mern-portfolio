import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProjects } from "../store/actions/projects";
import AdminProject from "../components/Admin-Projects/AdminProject";
import Loader from "../components/Common/Loader";

class Projects extends React.Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props;
    let pageContent;
    if (projects.length === 0) {
      pageContent = <Loader />;
    } else {
      pageContent = projects.map((project) => (
        <Link
          to={`/admin/edit-project/${project._id}`}
          key={project._id}
          className="nav-link"
        >
          <AdminProject project={project} />
        </Link>
      ));
    }
    return (
      <div className="container page">
        <h1 className="title mt-5 mb-5">PROJECTS</h1>
        <div className="row justify-content-around">{pageContent}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects
});

export default connect(
  mapStateToProps,
  { getProjects }
)(Projects);
