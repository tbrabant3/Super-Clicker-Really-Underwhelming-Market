import React, { Fragment } from 'react';
import { GitHub } from '@material-ui/icons';
import { Button, AppBar, Toolbar, use } from '@material-ui/core';

/**
 * @type {React.FC<React.PropsWithChildren<{}>>}
 */
const Footer = ({ children }) => {
	/**
	 *
	 * @param {React.MouseEvent<HTMLAnchorElement, MouseEvent>} e
	 */
	const onClick = e => {
		window.open(
			'https://github.com/tbrabant3/Super-Clicker-Really-Underwhelming-Market',
			'_blank'
		);
	};

	return (
		<Fragment>
			{children}
			<Button
				variant="contained"
				color="secondary"
				startIcon={<GitHub />}
				size={'large'}
				title="Github"
				onClick={onClick}
			>
				Github
			</Button>
		</Fragment>
	);
};

export default Footer;
