import { useEffect } from "react";
import { Chip, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const SerialGenre = ({ genres, setGenre, selectedGenres, setSelect, setPage }) => {
  const classes = useStyles();

  const fetchGenre = async () => {
    const { data } = await Axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);

    setGenre(data.genres);
    console.log(data);
  };

  const addHandle = (genre) => {
    setSelect([...selectedGenres, genre]);
    setGenre(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const removeHandle = (genre) => {
    setSelect(selectedGenres.filter((selected) => selected.id !== genre.id));
    setGenre([...genres, genre]);
    setPage(1);
  };

  useEffect(() => {
    fetchGenre();

    return () => {
      setGenre({});
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres && selectedGenres.map((genre) => <Chip style={{ margin: 2 }} color="primary" label={genre.name} key={genre.id} clickable onDelete={() => removeHandle(genre)} />)}
      {genres && genres.map((genre) => <Chip style={{ margin: 2 }} label={genre.name} key={genre.id} clickable onClick={() => addHandle(genre)} />)}
    </div>
  );
};

export default SerialGenre;
