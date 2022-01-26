import { makeStyles } from "@material-ui/core/styles";
import { red, grey } from "@material-ui/core/colors";
import { CenterFocusStrong } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  heroPage: {
    backgroundColor: grey[50],
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    height: "100%",
    display: "flex",
  },
  cardGrid: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  card: {
    height: "500px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    outlineWidth: "100px",
    borderRadius: "10px",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    height: "500px",
    borderRadius: "10px",
    backgroundColor: "#282c34",
    position: "relative",
  },
  cardContent: {
    flexGrow: 1,
  },
  heroCard: {
    backgroundColor: grey[50],
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default useStyles;
