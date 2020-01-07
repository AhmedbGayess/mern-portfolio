import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import ImagesPreview from "../components/Common/ImagesPreview";
import ProjectForm from "../components/Admin-Projects/ProjectForm";
import ProjectTechs from "../components/Admin-Projects/ProjectTechs";
import {
  getProject,
  addProject,
  editProject,
  deleteProject
} from "../store/actions/project";
import ImageZone from "../components/Admin-Posts/ImageZone";
import Delete from "../components/Common/Delete";

class EditProject extends React.Component {
  state = {
    name: "",
    description: "",
    technologies: [],
    images: [],
    liveDemo: "",
    repo: "",
    file: null
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      Promise.resolve(this.props.getProject(id)).then(() => {
        const {
          name,
          description,
          technologies,
          images,
          liveDemo,
          repo
        } = this.props.project;
        this.setState({
          name,
          description,
          technologies,
          images,
          liveDemo,
          repo
        });
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onImageChange = (e) => {
    this.setState({ file: e.target.files[0] });
  };

  onAddTechnology = (e) => {
    const tech = e.target.value;
    if (tech !== "" && !this.state.technologies.includes(tech)) {
      this.setState({ technologies: [...this.state.technologies, tech] });
    }
  };

  onRemoveTechnology = (e) => {
    this.setState({
      technologies: this.state.technologies.filter(
        (tech) => tech !== e.target.value
      )
    });
  };

  onDrop = (acceptedFiles, rejectedFiles) => {
    const formData = new FormData();
    formData.append("images", acceptedFiles[0]);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    axios
      .post("/upload", formData, config)
      .then((response) => {
        this.setState((prevState) => ({
          images: [...prevState.images, response.data.file]
        }));
      })
      .catch((error) => alert("Upload Error"));
  };

  deleteImage = (image) => {
    axios
      .delete(`/upload/${image}`)
      .then(() =>
        this.setState((prevState) => ({
          images: prevState.images.filter((img) => img !== image)
        }))
      )
      .catch((err) => console.log(err));
  };

  deleteProject = () => {
    this.props.deleteProject(this.props.match.params.id, this.props.history);
  };

  submit = () => {
    const {
      name,
      description,
      technologies,
      images,
      liveDemo,
      repo
    } = this.state;
    const project = {
      name,
      description,
      technologies,
      images,
      liveDemo,
      repo
    };
    const id = this.props.match.params.id;
    if (id) {
      this.props.editProject(id, project, this.props.history);
    } else {
      this.props.addProject(project, this.props.history);
    }
  };

  render() {
    const {
      name,
      description,
      images,
      technologies,
      liveDemo,
      repo
    } = this.state;
    const id = this.props.match.params.id;
    return (
      <div className="container page">
        <h1 className="title mt-5 mb-5">
          {id ? "EDIT PROJECT" : "ADD PROJECT"}
        </h1>
        <ProjectForm
          onChange={this.onChange}
          name={name}
          description={description}
          liveDemo={liveDemo}
          repo={repo}
        />
        <ProjectTechs
          onChange={this.onAddTechnology}
          onRemove={this.onRemoveTechnology}
          technologies={technologies}
        />
        {images.length < 5 && <ImageZone onDrop={this.onDrop} />}
        <ImagesPreview images={images} deleteImage={this.deleteImage} />
        <div className="text-center mb-5">
          <button className="btn btn-outline-success" onClick={this.submit}>
            Submit
          </button>
        </div>
        {id && <Delete deleteItem={this.deleteProject} name={"project"} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  project: state.project
});

export default connect(
  mapStateToProps,
  { getProject, addProject, editProject, deleteProject }
)(EditProject);
