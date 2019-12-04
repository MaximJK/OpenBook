import { Link } from 'react-router-dom';
import React from 'react';
import { withRouter } from 'react-router-dom';
class SignupForm extends React.Component {
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
                    <div id="signup-form" >
                        <h2 id="new">New here? Create a free account!</h2>
                        <label> 
                            <input className="signup-input-boxes" type="text" value={this.state.username} onChange={this.update('username')} placeholder="Username" />
                        </label>
                        <label> 
                            <input className="signup-input-boxes" type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password" />
                        </label>
                        <div id="signupDiv">
                        <input className="signupbox" type='submit' value='Sign Up' />
                    </div>
                    </div>
                </form>
                <form id="demo" onSubmit={this.handleSubmit}>
                        <button className="signupbox" onClick={() => {
                        this.props.login(this.demo).then(() => this.props.history.push("/home"))
                    }} type='submit' value="Demo" > Demo</button>
                </form>
            </div>
        )
    };
}
export default withRouter(SignupForm);