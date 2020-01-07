import React from "react";
import { connect } from "react-redux";
import { getProjects } from "../store/actions/projects";
import Loader from "../components/Common/Loader";
import Project from "../components/Portfolio/Project";

class Portfolio extends React.Component {
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
        <Project key={project._id} project={project} />
      ));
    }
    return (
      <div className="container page">
        <h1 className="title page-title mb-5">PORTFOLIO</h1>
        {pageContent}
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
)(Portfolio);
