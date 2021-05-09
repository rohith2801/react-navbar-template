import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { NavLink } from 'react-router-dom';
import {
    IconButton,
    Drawer,
    Divider,
    MenuList,
    MenuItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';

import { Routes } from './../routes/CustomRoute';

import { withRouter } from 'react-router-dom';

const drawerWidth = 240;

const SideMenu = ({ onMenuClick, isOpen, location }: any) => {
    const classes = useStyles(drawerWidth);
    const theme = useTheme();

    const handleDrawerClose = () => {
        onMenuClick(false);
    };

    const activeRoute = (routeName: any) => {
        return location.pathname === routeName;
    };

    return <>
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: isOpen,
                [classes.drawerClose]: !isOpen,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: isOpen,
                    [classes.drawerClose]: !isOpen,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            <MenuList>
                {Routes.map((prop, key) => {
                    return (
                        <NavLink to={prop.path} style={{ textDecoration: 'none' }} key={key}>
                            <MenuItem selected={activeRoute(prop.path)}>
                                <ListItemIcon>{prop.iconComponent && <prop.iconComponent />}</ListItemIcon>
                                <ListItemText primary={prop.sidebarName} />
                            </MenuItem>
                        </NavLink>
                    );
                })}
            </MenuList>
        </Drawer>
    </>;
};

export default withRouter(SideMenu);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: drawerWidth,
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
    }),
);
