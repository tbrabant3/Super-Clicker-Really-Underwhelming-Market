import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './index';
import { mount } from 'enzyme';
import { Button } from '@material-ui/core';

describe('Footer Testing', () => {
	const { assign } = document.location;

	beforeAll(() => {
		delete document.location.assign;
		document.location.assign = jest.fn();
	});

	afterAll(() => {
		document.location.assign = assign;
	});
	test('Should Render Footer', () => {
		const component = renderer.create(<Footer />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('Should Load Github Page', () => {
		const wrapper = mount(<Footer />);
		const githubButton = wrapper.find(Button);

		githubButton.simulate('click');

		expect(window.location.assign).toHaveBeenCalled();
	});
});
