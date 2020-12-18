import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  link: {
    display: "flex",
    color: "#F5F5F5",
  },
  icon: {
    color: "#F5F5F5",
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  linkSelected: {
    display: "flex",
    color: "#FFF",
    fontWeight: "bold",
  },
  iconSelected: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
    fontWeight: "bold",
  },
  navigateIcon: {
    color: "#FFF",
    fontWeight: "bold",
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default useStyles;
