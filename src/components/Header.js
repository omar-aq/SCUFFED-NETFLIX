import React from "react";
import { makeStyles, Typography, Box, Button } from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import InfoIcon from "@material-ui/icons/Info";

import Pic from "../images/header.jpg";
//components
import Navigation from "./Navigation";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "400px",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Pic})`,
  },
  btn: {
    padding: "5px",
    marginLeft: "5px",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navigation />
      <Box p={5}>
        <Box p={2}>
          <Typography variant="h3" color="primary">
            SCUFFED NETFLIX
          </Typography>
          <Typography
            variant="p"
            color="textSecondary"
            style={{ minHeight: "30px" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          </Typography>
        </Box>
        <Button className={classes.btn} variant="contained" color="primary">
          <PlayCircleFilledIcon />
          Watch Now
        </Button>
        <Button className={classes.btn} variant="outlined" color="primary">
          <InfoIcon />
          More Info
        </Button>
      </Box>
    </div>
  );
};

export default Header;
