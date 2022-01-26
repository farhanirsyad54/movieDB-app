import * as React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import MovieCreationIcon from "@material-ui/icons/MovieCreation";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import SearchIcon from "@material-ui/icons/Search";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

//Material UI's ListItemLink
function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(() => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />), [to]);

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export const mainList = (
  <div>
    <List aria-label="main mailbox folders">
      <ListItemLink to="trending" primary="Trending" icon={<WhatshotIcon />} />
      <ListItemLink to="movie" primary="Movies" icon={<MovieCreationIcon />} />
      <ListItemLink to="serial" primary="Serial" icon={<LiveTvIcon />} />
      <ListItemLink to="search" primary="Search" icon={<SearchIcon />} />
    </List>
  </div>
);
