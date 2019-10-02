import { Link } from 'react-router-dom';
import React from 'react';
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
}
  renderErrors() {
    
    return (
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
  let other;
  this.props.formType === 'login' ? other = 'signup' : other = 'login';
  debugger
  return (
    <div >
    <h1>  {this.props.formType} </h1>
    <Link to="/{other}">{other}</Link>
    <form onSubmit={this.handleSubmit}>
      {this.renderErrors()}
    <div>
      <label> Username:
      <input type="text" value={this.state.username} onChange={this.update('username')} />
      </label>
      <label> Password:
      <input type="password" value={this.state.password} onChange={this.update('password')} /> 
      </label>
      <input type='submit' value={this.props.formType}/>
    </div>
    </form>
    </div>
  )  
};
}
export default SessionForm;