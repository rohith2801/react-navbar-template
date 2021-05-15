import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Header = ({ isOpen, onMenuClick, drawerWidth }: any) => {
    const handleDrawerOpen = () => {
        onMenuClick(true);
    };

    const classes = useStyles(drawerWidth);
    return <>
        <AppBar position="fixed" className={clsx(classes.appBar, {
            [classes.appBarShift]: isOpen,
        })}>
            <Toolbar>
                <IconButton edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: isOpen,
                    })}
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerOpen}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Device Catalog System
                </Typography>
                <Button color="inherit">Logout</Button>
            </Toolbar>
        </AppBar>
    </>;
};

export default Header;

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBarShift: (drawerWidth: any) => ({
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    hide: {
        display: 'none',
    },
}));
