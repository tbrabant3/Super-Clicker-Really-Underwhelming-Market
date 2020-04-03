import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './redux/reducers';
import { save, load } from 'redux-localstorage-simple';
import Main from './sections/main';

// This theme overrides the palette's default theme to dark;
// the themeProvider in the component bellow will be used to provide
// theming to each of it's child components.

const createStoreWithMiddleware = applyMiddleware(save())(createStore);

const store = createStoreWithMiddleware(reducers, load());

const App = () => {
	return (
		<Provider store={store}>
			<Main />
		</Provider>
	);
};

export default App;
