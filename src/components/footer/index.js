import React, { Fragment } from 'react';
import GitHubButton from './githubButton';
import AboutButton from '../AboutButton';
import CreditsButton from '../CreditsButton';

/**
 * @type {React.FC<React.PropsWithChildren<{}>>}
 */
const Footer = ({ children }) => {
	return (
		<Fragment>
			{children}
			<GitHubButton />
			<AboutButton />
			<CreditsButton />
		</Fragment>
	);
};

export default Footer;
