import React from "react";
import { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import useStyles from "../Style";
import Axios from "axios";
import { Button, Grid } from "@material-ui/core";
import MovieList from "../MovieList/MovieList";
import Genre from "../Genre";
import CustomPagination from "../CustomPagination";
import useGenre from "../Hook/useGenre";
import TextField from "@material-ui/core/TextField";

const Search = () => {
  const classes = useStyles();

  const [searchKey, setSearch] = useState("");
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [page, setPage] = useState(1);

  const fetchSearch = async () => {
    const { data } = await Axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchKey}&page=${page}&include_adult=false`);

    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  // const handleSubmit = (e) => {
  //   e.prefentDefault();
  // };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [page, searchKey]);

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Search
            </Typography>
            <form align="center" style={{ margin: 10 }}>
              <TextField id="outlined-basic" label="" variant="outlined" onChange={handleChange} value={searchKey} autoFocus />
            </form>
            {searchKey.length > 0 && (
              <Typography component="h3" variant="h5" align="center" color="textPrimary" gutterBottom>
                Searching for {searchKey}
              </Typography>
            )}
          </Container>
        </div>
        <div className={classes.heroCard}>
          <Container className={classes.cardGrid} bgcolor="background.paper">
            <Grid container spacing={1}>
              {content && content.map((c) => <MovieList key={c.id} id={c.id} poster={c.poster_path} tittle={c.title || c.name} date={c.first_air_date || c.release_date} media_type="movie" vote_average={c.vote_average} />)}
            </Grid>
          </Container>
          <Container className={classes.cardGrid}>
            <Grid align="center" container spacing={5}></Grid>
          </Container>{" "}
          {numOfPages > 1 && <CustomPagination align="center" setPage={setPage} page={page} numOfPages={numOfPages} />}{" "}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Search;
