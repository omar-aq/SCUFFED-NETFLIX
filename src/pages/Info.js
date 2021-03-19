import React from "react";
import { useParams } from "react-router-dom";

//material ui
import { makeStyles, Typography, Box, Button } from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import InfoIcon from "@material-ui/icons/Info";

import { useGlobalContext } from "../context";

//components
import Navigation from "../components/Navigation";

const imgApi = "https://image.tmdb.org/t/p/w1280";

const useStyles = makeStyles({
  btn: {
    padding: "5px",
    marginLeft: "5px",
  },
  vote: {
    color: "red",
  },
});
const Info = () => {
  const { id } = useParams();
  const { movies } = useGlobalContext();
  console.log(movies);
  const classes = useStyles();
  return (
    <>
      {movies.map((movie) => {
        const {
          title,
          overview,
          poster_path,
          vote_average,
          vote_count,
          release_date,
        } = movie;
        if (movie.id === parseInt(id)) {
          return (
            <div
              style={{
                width: "100%",
                height: "1000px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${imgApi + poster_path})`,
              }}
            >
              <Navigation />
              <Box p={5}>
                <Box p={2}>
                  <Typography variant="h3" color="primary">
                    {title}
                  </Typography>
                  <Typography variant="p" color="inherit">
                    {overview}
                  </Typography>
                  <Box p={1}>
                    <Typography variant="h5">
                      Release Date:
                      <span className={classes.vote}>{release_date}</span>
                    </Typography>
                    <Typography
                      variant="h6"
                      color="inherit
                  "
                    >
                      Vote Count:
                      <span className={classes.vote}>{vote_count}</span>
                    </Typography>
                    <Typography
                      variant="h6"
                      color="inherit
                  "
                    >
                      Vote Average:
                      <span className={classes.vote}>{vote_average}</span>
                    </Typography>
                  </Box>
                </Box>
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="primary"
                >
                  <PlayCircleFilledIcon />
                  Watch Now
                </Button>
                <Button
                  className={classes.btn}
                  variant="outlined"
                  color="primary"
                >
                  <InfoIcon />
                  More Info
                </Button>
              </Box>
            </div>
          );
        }
        return <div></div>;
      })}
    </>
  );
};

export default Info;
