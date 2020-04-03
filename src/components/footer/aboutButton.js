import React, { useState, Fragment } from 'react';
import { Button, Modal } from '@material-ui/core';

/**
 * @type {React.FC<>}
 */
const AboutButton = () => {
	const [open, setOpen] = useState(false);
	const toggle = () => setOpen(!open);
	/**
	 *
	 * @param {React.MouseEvent<HTMLAnchorElement, MouseEvent>} e
	 */
	const onClick = e => {
		toggle();
	};

	return (
		<Fragment>
			<Button
				variant="contained"
				color="secondary"
				size={'large'}
				title="About"
				onClick={onClick}
			>
				About
			</Button>
			<Modal open={open} onClose={toggle}>
				<div>This is how you play the game. Click.</div>
			</Modal>
		</Fragment>
	);
};

export default AboutButton;
