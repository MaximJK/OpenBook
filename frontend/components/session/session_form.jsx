import { Link } from 'react-router-dom';
import React from 'react';
import { withRouter } from 'react-router-dom';
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    
    };
    this.demo = {
      username: "demo",
      password: "demodemo"

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/home"));
}


render() {
  let errors = this.props.errors
   
  if (Object.keys(errors).length === 0) {
    errors = ''
  } else {
    errors = Object.values(errors)[0].map(error => {
      return (
        <li>
          {error}
        </li>
      )
    })
   
    }
  return (
    <div>
 
    <form onSubmit={this.handleSubmit} className="login-form-box">
    <div className="signin-form" >
      <label> 
            <input className="signinboxes" type="text" value={this.state.username} onChange={this.update('username')} placeholder="Username" />
      </label>
      <label> 
            <input className="signinboxes" type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password" /> 
      </label>
          <input id="submitbox" type='submit' value="Sign in "/>
        <ul className='errorBox'>
          {Object.values(errors)}
        </ul>
    </div>
    </form>
      <form onSubmit={this.handleSubmit}>
        <button className="demobox" onClick={() => {
          this.props.processForm(this.demo).then(() => this.props.history.push("/home"))
        }} type='submit' value="Demo" > Demo</button>
        </form>
    </div>
  )
};
}
export default withRouter(SessionForm);