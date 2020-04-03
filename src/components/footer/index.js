import React, { Fragment } from 'react';
import { GitHub } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import GitHubButton from './githubButton';

/**
 * @type {React.FC<React.PropsWithChildren<{}>>}
 */
const Footer = ({ children }) => {
	return (
		<Fragment>
			{children}
			<GitHubButton />
			<Button variant="contained" color="primary" size={'large'} title="About">
				About
			</Button>
			<Button
				variant="contained"
				color="primary"
				size={'large'}
				title="Credits"
			>
				Credits
			</Button>
		</Fragment>
	);
};

export default Footer;
