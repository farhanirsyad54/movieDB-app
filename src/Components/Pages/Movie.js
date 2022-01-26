import React from "react";
import { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "../Style";
import Axios from "axios";
import { Button, Grid } from "@material-ui/core";
import MovieList from "../MovieList/MovieList";
import Genre from "../Genre";
import CustomPagination from "../CustomPagination";
import useGenre from "../Hook/useGenre";

const Movie = () => {
  const classes = useStyles();

  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [genres, setGenre] = useState([]);
  const [selectedGenres, setSelect] = useState([]);
  const genreForURL = useGenre(selectedGenres);

  const fetchMovie = async () => {
    const { data } = await Axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreForURL}`
    );
    console.log(data);
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovie();
  }, [genreForURL, page]);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Movies
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Now playing
            </Typography>
            <Genre type="movie" genres={genres} setGenre={setGenre} selectedGenres={selectedGenres} setSelect={setSelect} setPage={setPage} />
          </Container>
        </div>
        <div className={classes.heroCard}>
          <Container className={classes.cardGrid} bgcolor="background.paper">
            <Grid container spacing={1}>
              {content &&
                content.map((c) => <MovieList key={c.id} content={c.content} id={c.id} poster={c.poster_path} tittle={c.title || c.name} date={c.first_air_date || c.release_date} media_type="movie" vote_average={c.vote_average} />)}
            </Grid>
          </Container>
          {numOfPages > 1 && <CustomPagination align="center" setPage={setPage} page={page} numOfPages={numOfPages} />}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Movie;
