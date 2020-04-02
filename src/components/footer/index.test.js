import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './index';

test('Should Render Footer', () => {
	const component = renderer.create(<Footer />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
