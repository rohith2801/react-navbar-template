import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { isAuthenticated } from './../../util/auth.util';
import { Grid, makeStyles, Paper, TextField, Theme, Typography } from '@material-ui/core';

const Login = (props: any) => {
    const classes = useStyles();

    const onLogin = () => {
        localStorage.setItem("isUserLoggedIn", "true");
        props.history.push('/');
    };

    return (
        <>
            {isAuthenticated() ? <Redirect to="/" /> :
                <Grid container className={classes.loginContainer}>
                    <Grid item md={4}></Grid>
                    <Grid 
                    item 
                    container
                    md={4} 
                    xs={12}
                    direction="column"
                    justify="center"
                    ><Paper>
                         <Grid item className={classes.formGrid} >
                           <Typography align="center" component="h5" variant="h5"> Login </Typography>
                        </Grid>
                        <Grid item className={classes.formGrid} >
                            <TextField 
                                id="emailid" 
                                label="Email address" 
                                variant="outlined"
                                fullWidth
                                />
                        </Grid>
                        <Grid item  className={classes.formGrid}>
                            <TextField 
                                id="password"
                                label="Password" 
                                variant="outlined"
                                fullWidth
                                />
                        </Grid>
                        <Grid 
                        item 
                        container 
                        className={classes.formGrid}
                        justify="center"
                        ><Grid item xs={6}>
                            <Button 
                            variant="contained" 
                            onClick={onLogin}
                            fullWidth
                            >Login</Button>
                            </Grid>
                        </Grid>
                        </Paper>
                    </Grid>
                    <Grid item md={4}></Grid>
                </Grid>
            }
        </>
    )
};

export default withRouter(Login);

const useStyles = makeStyles((theme:Theme) => ({
    loginContainer: {
        height:'100vh'
    },
    button: {
        minWidth:'100%'
    },
    formGrid: {
        padding: theme.spacing(1),
        margin: theme.spacing(2)
    }
  }));
  
