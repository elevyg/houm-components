import { Theme, makeStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
  wrapper: {
    margin: "0px",
    width: "100%",
    padding: theme.spacing(0.3),
  },
  label: {
    width: "100%",
    lineHeight: "1.36rem",
    fontWeight: 700,
    fontSize: "1rem",
    marginBottom: theme.spacing(1),
  },
  textFieldRoot: {
    width: "100%",
    "& input.MuiInputBase-input": {
      color: theme.palette.grey[500],
    },
    "& .MuiInput-underline:before": {
      borderWidth: "0px",
      borderColor: theme.palette.grey["50"],
    },
    "& .MuiInput-underline:after": {
      borderWidth: "0px",
      borderColor: theme.palette.grey["50"],
    },
  },
  underline: {
    "&&&:before": {
      borderWidth: "0px",
      borderColor: theme.palette.grey["50"],
    },
    "&&:after": {
      borderWidth: "0px",
      borderColor: theme.palette.grey["50"],
    },
  },
}));
