import React from 'react';
import Home from './sections/home';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './redux/reducers';
import { save, load } from 'redux-localstorage-simple';

// This theme overrides the palette's default theme to dark;
// the themeProvider in the component bellow will be used to provide
// theming to each of it's child components.
const theme = createMuiTheme({
	palette: {
		type: 'dark'
	},
	typography: {
		fontFamily: 'Bad-Handwriting'
	}
});

const createStoreWithMiddleware = applyMiddleware(save())(createStore);

const store = createStoreWithMiddleware(reducers, load());

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<CssBaseline />
				<Home />
			</Provider>
		</ThemeProvider>
	);
};

export default App;
