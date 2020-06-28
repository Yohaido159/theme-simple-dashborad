import React, { useState } from "react";
import "./SidebarIcons.styles.scss";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Home, FavoriteRounded, Person, Settings } from "@material-ui/icons";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#000",
    flexGrow: 1,
    display: "flex",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tab: {
    marginBottom: "15px",
  },
}));
const SidebarIcons = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab className={classes.tab} icon={<Home fontSize="large" />} />
        <Tab
          className={classes.tab}
          icon={<FavoriteRounded fontSize="large" />}
        />
        <Tab className={classes.tab} icon={<Person fontSize="large" />} />
        <Tab className={classes.tab} icon={<Settings fontSize="large" />} />
      </Tabs>
    </div>
  );
};

export default SidebarIcons;
