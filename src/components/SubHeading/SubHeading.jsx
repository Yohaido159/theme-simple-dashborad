import React, { useState } from "react";
import "./SubHeading.styles.scss";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #000",
  },
  indicator: {
    backgroundColor: "red",
    borderBottom: "1px solid red",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#000",
      opacity: 1,
    },
    "&$selected": {
      color: "#0d0d0d",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#0d0d0d",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: "inherit",
  },
}));

const SubHeading = (props) => {
  const classes = useStyles();
  let { value, handleChange } = props;

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Upcoming" />
          <AntTab label="History" />
        </AntTabs>
        <Typography className={classes.padding} />
      </div>
    </div>
  );
};

export default SubHeading;
