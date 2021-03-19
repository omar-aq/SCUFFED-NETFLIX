import React from "react";
import { Link } from "react-router-dom";

//material ui
import { makeStyles, Typography, Box, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  nav: {
    display: "flex",
    flexGrow: 1,
  },
  navLinks: {
    marginLeft: "50px",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
  },
});

const Navigation = () => {
  const classes = useStyles();
  return (
    <Box p={2} className={classes.root}>
      <Box className={classes.nav}>
        <Typography variant="h4" color="primary">
          NETFLIX
        </Typography>
        <Link to="/">
          <Typography variant="h6" color="inherit" className={classes.navLinks}>
            Back To Home
          </Typography>
        </Link>
      </Box>
      <Box border={1} className={classes.icon}>
        <SearchIcon />
        <InputBase placeholder="Search…" />
      </Box>
    </Box>
  );
};

export default Navigation;
