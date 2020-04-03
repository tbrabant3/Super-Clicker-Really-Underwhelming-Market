import React, { Fragment } from 'react';
import { GitHub } from '@material-ui/icons';
import { Button, AppBar, Toolbar, use } from '@material-ui/core';

/**
 * @type {React.FC<React.PropsWithChildren<{}>>}
 */
const Footer = ({ children }) => {
	/**
	 * React.MouseEvent<HTMLButtonElement, MouseEvent>
	 * @param {*} e
	 * @param {*} d
	 */
	const onClick = (e, d) => {
		console.log('clicked');
		document.location.assign(
			'https://github.com/tbrabant3/Super-Clicker-Really-Underwhelming-Market'
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
