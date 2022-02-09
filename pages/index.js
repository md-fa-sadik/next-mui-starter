import React, { useState } from "react";
import { Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import useStyles from "../styles/styles";

export default function App() {
  // const [mode, setMode] = useState("light");
  // const theme = createTheme({
  //   palette: {
  //     mode,
  //     ...(mode === "light"
  //       ? { primary: { main: "#c90c25" } }
  //       : { primary: { main: "#000000" } }),
  //   },
  // });
  const styles = useStyles();
  const theme = createTheme({
    spacing: 4,
  });
  return (
    <ThemeProvider theme={theme}>
      <Typography className={styles.root} variant='h1'>
        Hello world
      </Typography>
    </ThemeProvider>
  );
}
