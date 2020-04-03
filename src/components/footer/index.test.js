import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './index';
import GithubButton from './GithubButton';
import { mount } from 'enzyme';
import { Button, Modal } from '@material-ui/core';
import AboutButton from '../AboutButton';
import CreditsButton from '../CreditsButton';

describe('Footer Testing', () => {
	const { open } = window;

	beforeAll(() => {
		delete window.open;
		window.open = jest.fn();
	});

	afterAll(() => {
		window.open = open;
	});

	it('Should Render Footer', () => {
		const component = renderer.create(<Footer />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Should Load Github Page', () => {
		const wrapper = mount(<GithubButton />);
		const githubButton = wrapper.find(Button);
		const githubModal = wrapper.find(Modal);
		expect(githubModal.prop('open')).toBe(false);
		githubButton.simulate('click');
		expect(githubModal.prop('open')).toBe(true);
		expect(window.open).toHaveBeenCalled();
		expect(window.open).toHaveBeenCalledWith(
			'https://github.com/tbrabant3/Super-Clicker-Really-Underwhelming-Market',
			'_blank'
		);
	});

	it('Should Render the About Modal', () => {
		const wrapper = mount(<AboutButton />);
		const githubButton = wrapper.find(Button);
		const githubModal = wrapper.find(Modal);
		expect(githubModal.prop('open')).toBe(false);
		githubButton.simulate('click');
		expect(githubModal.prop('open')).toBe(true);
	});

	it('Should Render the Credits Modal', () => {
		const wrapper = mount(<CreditsButton />);
		const githubButton = wrapper.find(Button);
		const githubModal = wrapper.find(Modal);
		expect(githubModal.prop('open')).toBe(false);
		githubButton.simulate('click');
		expect(githubModal.prop('open')).toBe(true);
	});
});
