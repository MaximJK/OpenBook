import React from 'react';
import SignUpFormContainer from "../session/signup_form_container"
import LoginFormContainer from "../session/login_form_container"

const Splash = () =>  {
    return (
    <div className=".splash-all">
            <header>
                <div id=".splash-title"> open <span class="book">book</span> </div>
                <div className=".splash-login-container"> <LoginFormContainer /> </div>
        </header>
        <br/>

        <div>
            <h1 className=".splash-slogan"> TEXT </h1>
        <div className=".splash-signup-container"> <SignUpFormContainer /> </div >
        </div>
    </div>
    )
}


export default Splash