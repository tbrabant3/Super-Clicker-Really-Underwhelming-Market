import React, {Fragment} from 'react';
import Home from "./sections/home";
import {createMuiTheme, CssBaseline} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";

// This theme overrides the palette's default theme to dark;
// the themeProvider in the component bellow will be used to provide
// theming to each of it's child components.
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
