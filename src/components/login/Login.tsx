import React from 'react';
import Button from '@material-ui/core/Button';

const Login = () => {

    const onLogin = () => {
        localStorage.setItem("isUserLoggedIn", "true");
        window.location.href = "download";
    };

    return (
        <div>
            <Button onClick={onLogin}>Login</Button>
        </div>
    )
};

export default Login;
