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
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
}


render() {

  return (
    <div >
    <h1>  {this.props.formType} </h1>
 
    <form onSubmit={this.handleSubmit}>

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