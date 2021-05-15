import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { isAuthenticated } from './../../util/auth.util';

const Login = (props: any) => {

    const onLogin = () => {
        localStorage.setItem("isUserLoggedIn", "true");
        props.history.push('/');
    };

    console.warn(isAuthenticated())

    return (
        <>
            {isAuthenticated() ? <Redirect to="/" /> :
                <div>
                    <Button onClick={onLogin}>Login</Button>
                </div>
            }
        </>
    )
};

export default withRouter(Login);
