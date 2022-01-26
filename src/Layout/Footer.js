import * as React from "react";
import LayoutStyles from "./LayoutStyle";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  const classes = LayoutStyles();
  return (
    <>
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Copyrigrt© FarhanIrsyad 2021
        </Typography>
      </footer>
    </>
  );
};
export default Footer;
