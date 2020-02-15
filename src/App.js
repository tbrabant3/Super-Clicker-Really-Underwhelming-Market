import React, {Fragment} from 'react';
import Home from "./sections/home";
import {createMuiTheme, CssBaseline} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";

const theme = createMuiTheme({
    palette: {
        type: 'dark'
    }
});

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Home/>
      </ThemeProvider>
  );
};

export default App;
