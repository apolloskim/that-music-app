import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.submitForm(user);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    let formInvite;
    if (this.props.formType === "log in") {
      formInvite = (
        <div>
          <div className="divider"></div>
          <div className="signup-invite-container">
            <div className="form-invite-question">Don't have an account?</div>
            <Link to="/signup" className="sign-up-link">sign up</Link>
          </div>
        </div>
      );
    } else {
      formInvite = (
        <p className="login-invite">
          Already have an account?&nbsp;
          <Link to='/login' className="log-in-link">Log In</Link>
        </p>
      );
    }

    return(
      <div className="session-container">
          <Link exact='true' to='/' className="link-session-logo">
            <div className="session-logo">
                <img className="session-picture-logo" src={window.spotifyBlack} />
                <div className="form-logo">
                  That Music App
              </div>
            </div>
          </Link>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <ul>
            <li className={`form-list ${this.props.errors.length > 0 ? 'has-errors' : ""}`}>
              <input type="text"
                value={this.state.username}
                placeholder="username"
                onChange={this.update("username")} />

                <p className="form-error">{this.props.errors[0] === 'Username is too short (minimum is 6 characters)' ?
                  this.props.errors[0] : (this.props.errors[0] === 'Password is too short (minimum is 6 characters)' ?
                  this.props.errors[0] : '')}</p>
            </li>
            <li className={`form-list ${this.props.errors.length > 0 ? 'has-errors' : ""}`}>
              <input type="password"
                value={this.state.password}
                placeholder="password"
                onChange={this.update("password")} />

                <p className="form-error">{this.props.errors[1] === 'Password is too short (minimum is 6 characters)' ?
                  this.props.errors[1] : (this.props.errors[0] === 'Password is too short (minimum is 6 characters)' ?
                  this.props.errors[0] : '')}</p>
            </li>
          </ul>
          <button className="form-submit">{this.props.formType}</button>
        </form>
        {formInvite}
      </div>
    );
  }
}

export default SessionForm;
