import React from 'react';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import Home from '../home';
import { ThemeProvider } from '@material-ui/styles';
import {connect, useSelector} from 'react-redux';

const lightTheme = createMuiTheme({
	palette: {
		type: 'light'
	},
	typography: {
		fontFamily: 'Bad-Handwriting'
	}
});

const darkTheme = createMuiTheme({
	palette: {
		type: 'dark'
	},
	typography: {
		fontFamily: 'Bad-Handwriting'
	}
});

const mapStateToProps = state => ({
	headerData: state.ThemeReducer.theme
});

const Main = () => {
	const headerData = useSelector(state => state.ThemeReducer.theme);

	const correctTheme = headerData === 'dark' ? darkTheme : lightTheme;

	return (
		<ThemeProvider theme={correctTheme}>
			<CssBaseline />
			<Home />
		</ThemeProvider>
	);
};

export default connect(mapStateToProps)(Main);
