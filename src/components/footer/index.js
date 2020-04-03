import React, { Fragment } from 'react';
import GithubButton from './GithubButton';
import AboutButton from '../AboutButton';
import CreditsButton from '../CreditsButton';

/**
 * @type {React.FC<React.PropsWithChildren<{}>>}
 */
const Footer = ({ children }) => {
	return (
		<Fragment>
			{children}
			<GithubButton />
			<AboutButton />
			<CreditsButton />
		</Fragment>
	);
};

export default Footer;
