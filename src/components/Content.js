import React from "react";
import { makeStyles, Box, Grid, Button } from "@material-ui/core";
import Movies from "./Movies";

const useStyles = makeStyles((theme) => ({
  category: {
    padding: "5px",
    marginLeft: "20px",
  },
}));

const Content = () => {
  const classes = useStyles();
  return (
    <Box p={2}>
      <Grid container justify="center">
        <Grid item className={classes.category}>
          <Button variant="outlined" color="inherit">
            Action
          </Button>
        </Grid>
        <Grid item className={classes.category}>
          <Button variant="outlined" color="inherit">
            Action
          </Button>
        </Grid>
        <Grid item className={classes.category}>
          <Button variant="outlined" color="inherit">
            Action
          </Button>
        </Grid>
      </Grid>
      <Movies />
    </Box>
  );
};

export default Content;
