import React from "react";
import { connect } from "react-redux";
import { login } from "../store/actions/auth";
import FormInputField from "../components/Common/FormInputField";

class LoginPage extends React.Component {
  state = {
    email: "",
    password: ""
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { login, history } = this.props;
    login({ email, password }, history);
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="p-5 mt-5 container">
        <div className="col-md-6 offset-md-3 mt-5 bg-light border shadow rounded p-5">
          <h2 className="text-center mb-5">Admin Login</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <FormInputField
                name="email"
                label="Enter your email"
                className="form-control mt-3 mb-3"
                placeholder="Email"
                type="email"
                value={email}
                onChange={this.onChange}
              />
              <FormInputField
                name="password"
                label="Enter your password"
                className="form-control mb-2"
                placeholder="Password"
                type="password"
                value={password}
                onChange={this.onChange}
              />
              <div className="text-center mt-4">
                <button className="btn btn-outline-primary">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { login }
)(LoginPage);
