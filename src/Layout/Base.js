import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import LayoutStyles from "./LayoutStyle";
import { Route } from "react-router-dom";
import Movie from "../Components/Pages/Movie";
import Trending from "../Components/Pages/Trending";
import Serial from "../Components/Pages/Serial";
import Search from "../Components/Pages/Search";
import Axios from "axios";

//Halaman base untuk layout
const Base = ({ match }) => {
  const classes = LayoutStyles();
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    // console.log("this")
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header toggleDrawer={toggleDrawer} open={open} />
      <Sidebar toggleDrawer={toggleDrawer} open={open} />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Route path={`${match.url}/trending`} component={Trending} />
        <Route path={`${match.url}/movie`} component={Movie} />
        <Route path={`${match.url}/serial`} component={Serial} />
        <Route path={`${match.url}/search`} component={Search} />
        <Footer />
      </main>
    </div>
  );
};

export default Base;
