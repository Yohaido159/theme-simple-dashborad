import React, { useState } from "react";
import "./NavbarSide.styles.scss";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Home } from "@material-ui/icons";

import SidebarIcons from "../SidebarIcons/SidebarIcons";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#000",
    flexGrow: 1,
    height: "100%",
  },
  toolbarBtn: {
    position: "absolute",
    top: "0",
    color: "rgb(39, 39, 39)",
  },

  toolbar: {
    boxShadow: "none",
    position: "relative",
    width: "70px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "#fff",
  },
  menuButton: {},
  homeIcon: {
    borderLeft: "1px solid",
  },
  title: {
    flexGrow: 1,
  },
}));

function HomeIcon(props) {
  return (
    <div className="p-2 d-flex justify-content-center align-items-center icons__icon">
      <Home {...props} className="mb-2">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </Home>
    </div>
  );
}

const NavbarSide = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className="navbarside">
        <div className={classes.root}>
          <AppBar position="static" className={classes.toolbar}>
            <Toolbar className={classes.toolbarBtn}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
            <div className="icons d-flex flex-column">
              <SidebarIcons />
            </div>
          </AppBar>
        </div>
      </div>
    </>
  );
};

export default NavbarSide;
