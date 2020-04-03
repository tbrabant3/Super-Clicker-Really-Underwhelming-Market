import React from 'react';
import reducer from '../../redux/reducers/header';
import * as actions from '../../redux/actions';
import * as types from '../../redux/actions/actions';

describe('Redux Testing', () => {
	const { open } = window;

	beforeAll(() => {
		delete window.open;
		window.open = jest.fn();
	});

	afterAll(() => {
		window.open = open;
	});

	it('should create a toggle light and dark theme action', () => {
		const expectedAction = {
			type: types.TOGGLE_LIGHT_DARK_THEME
		};
		expect(actions.toggleLightDarkTheme()).toEqual(expectedAction);
	});

	it('should handle TOGGLE_LIGHT_DARK_THEME', () => {
		expect(
			reducer([], {
				type: types.TOGGLE_LIGHT_DARK_THEME
			})
		).toEqual({
			theme: 'light'
		});
	})
});
