import { TOGGLE_LIGHT_DARK_THEME } from '../actions/actions';

const initialState = { theme: 'dark' };

const getCorrectTheme = theme => {
	return theme === 'light' ? 'dark' : 'light';
};

const ThemeReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_LIGHT_DARK_THEME:
			return { ...state, theme: getCorrectTheme(state.theme) };
		default:
			return state;
	}
};

export default ThemeReducer;
