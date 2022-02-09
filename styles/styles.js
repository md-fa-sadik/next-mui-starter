import { createStyles, makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// const theme = createTheme();
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: "red",
    },
  })
);

export default useStyles;
