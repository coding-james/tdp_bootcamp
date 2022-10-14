import {useState} from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Greeting from "./Greeting";

function LoginControl() {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let button = (isLoggedIn) ? <LogoutButton onClick={() => setIsLoggedIn(false)}/> : <LoginButton onClick={() => setIsLoggedIn(true)}/>
    
    return (
        <>
            <Greeting isLoggedIn={isLoggedIn}/>
            {button}
        </>
    );
};

export default LoginControl;