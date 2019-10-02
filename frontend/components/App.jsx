import GreetingContainer from "./greetings/greeting_container";
import React from "react";


const App = () => (
    <div>
        <header>
            <h1>o p e n  b o o k</h1>
            {/* <GreetingContainer /> */}
        </header>
        <switch>
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
        </switch>
    </div>
);

export default App