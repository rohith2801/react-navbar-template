import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";

import Header from "./Header";
import SideMenu from "./SideMenu";
import CustomRoute from "../routes/CustomRoute";
import { isAuthenticated } from "../util/auth.util";

const drawerWidth = 240;

const Layout = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  console.warn("I am layout");

  return (
    <>
      {!isAuthenticated() ? (
        <Redirect to="login" />
      ) : (
        <div style={{ display: "flex" }}>
          <Header
            onMenuClick={setOpen}
            isOpen={open}
            drawerWidth={drawerWidth}
          />
          <SideMenu
            onMenuClick={setOpen}
            isOpen={open}
            drawerWidth={drawerWidth}
          />
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.toolbar} />
            <CustomRoute />
          </main>
        </div>
      )}
    </>
  );
};

export default Layout;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
  })
);
