import React, { useState, Fragment } from 'react';
import { GitHub } from '@material-ui/icons';
import { Button, Modal } from '@material-ui/core';

/**
 * @type {React.FC<>}
 */
const GithubButton = () => {
	const [open, setOpen] = useState(false);
	const toggle = () => setOpen(!open);
	/**
	 *
	 * @param {React.MouseEvent<HTMLAnchorElement, MouseEvent>} e
	 */
	const onClick = e => {
		window.open(
			'https://github.com/tbrabant3/Super-Clicker-Really-Underwhelming-Market',
			'_blank'
		);
		toggle();
	};

	return (
		<Fragment>
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
			<Modal open={open} onClose={toggle}>
				<div>Thank for looking at our project!</div>
			</Modal>
		</Fragment>
	);
};

export default GithubButton;
