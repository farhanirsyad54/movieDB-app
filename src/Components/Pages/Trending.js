import React from "react";
import { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "../Style";
import Axios from "axios";
import { Grid } from "@material-ui/core";
import MovieList from "../MovieList/MovieList";
import CustomPagination from "../CustomPagination";

const Trending = () => {
  const classes = useStyles();

  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();

  const fetchTrending = async () => {
    const { data } = await Axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
    console.log(data);
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* <Carousel content={content} styel={{ width: "1000px" }} /> */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Trending
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Trending on this day
            </Typography>
          </Container>
        </div>
        <div className={classes.heroCard}>
          <Container className={classes.cardGrid} bgcolor="background.paper">
            <Grid container spacing={1}>
              {content && content.map((c) => <MovieList key={c.id} id={c.id} poster={c.poster_path} tittle={c.title || c.name} date={c.first_air_date || c.release_date} media_type="movie" vote_average={c.vote_average} />)}
            </Grid>
            <Grid container spacing={1} alignItems="center">
              {numOfPages > 1 && <CustomPagination setPage={setPage} page={page} numOfPages={numOfPages} />}{" "}
            </Grid>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Trending;
