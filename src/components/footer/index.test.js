import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './index';
import GitHubButton from './githubButton';
import { mount } from 'enzyme';
import { Button } from '@material-ui/core';

describe('Footer Testing', () => {
	const { open } = window;

	beforeAll(() => {
		delete window.open;
		window.open = jest.fn();
	});

	afterAll(() => {
		window.open = open;
	});

	test('Should Render Footer', () => {
		const component = renderer.create(<Footer />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('Should Load Github Page', () => {
		const wrapper = mount(<GitHubButton />);
		const githubButton = wrapper.find(Button);

		githubButton.simulate('click');

		expect(window.open).toHaveBeenCalled();
		expect(window.open).toHaveBeenCalledWith(
			'https://github.com/tbrabant3/Super-Clicker-Really-Underwhelming-Market',
			'_blank'
		);
	});
});