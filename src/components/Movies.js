import React from "react";
import { Link } from "react-router-dom";

//material ui
import {
  Box,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Card,
  Button,
} from "@material-ui/core";
import { useGlobalContext } from "../context";

const imgApi = "https://image.tmdb.org/t/p/w1280";

const Movies = () => {
  const { movies } = useGlobalContext();
  return (
    <Box p={5}>
      <Grid container justify="center" spacing={1}>
        {movies.map((movie) => {
          const { id, poster_path, title } = movie;
          return (
            <Grid item key={id} sm={4}>
              <Link to={`/info/${id}`}>
                <Button>
                  <Card>
                    <CardContent>
                      <Typography
                        color="textSecondary"
                        style={{ textAlign: "center" }}
                      >
                        {title}
                      </Typography>
                      <CardMedia>
                        <img width="100%" src={imgApi + poster_path} alt="" />
                      </CardMedia>
                    </CardContent>
                  </Card>
                </Button>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Movies;
