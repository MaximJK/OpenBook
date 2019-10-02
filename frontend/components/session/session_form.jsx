import { Link } from 'react-router';
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
        {this.props.errors.map((error) => (
          <li key={`error`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
update(){


}


render() {
  let other;
  this.props.formType === 'login' ? other = 'signup' : other = 'login';

  return (
    <div >
    <h1>  {this.props.formType} </h1>
    <Link to="/{other}">{other}</Link>
    <form onSubmit={this.handleSubmit}>
    <div>
      <label> Username:
      <input type="text" value={this.state.username} onChange={this.update('username')} />
      </label>
      <label> Password:
      <input type="password" value={this.state.password} onChange={this.update('password')} /> 
      </label>
      <input type='submit' value={this.props.formType}/>
      {this.renderErrors()}
    </div>
    </form>
    </div>
  )  
};
}