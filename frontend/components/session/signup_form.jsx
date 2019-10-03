import { Link } from 'react-router-dom';
import React from 'react';
class SignupForm extends React.Component {
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
        debugger
        return (
            <div >

                <form onSubmit={this.handleSubmit} className="login-form-box">

                    <div className="login-form" >
                        <label> Username:
      <input type="text" value={this.state.username} onChange={this.update('username')} />
                        </label>
                        <label> Password:
      <input type="password" value={this.state.password} onChange={this.update('password')} />
                        </label>
                        <input type='submit' value='Sign Up' />
                    </div>
                </form>
            </div>
        )
    };
}
export default SignupForm;