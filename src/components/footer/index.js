import React, { Fragment } from 'react';
import { GitHub } from '@material-ui/icons';
import { Button, AppBar, Toolbar, use } from '@material-ui/core';

/**
 * @type {React.FC<React.PropsWithChildren<{}>>}
 */
const Footer = ({ children }) => {
	return (
		<Fragment>
			{children}
			<Button
				variant="contained"
				color="secondary"
				startIcon={<GitHub />}
				size={'large'}
				title="Github"
			>
				Github
			</Button>
		</Fragment>
	);
};

export default Footer;
