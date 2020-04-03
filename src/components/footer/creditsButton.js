import React, { useState, Fragment } from 'react';
import { Button, Modal } from '@material-ui/core';

/**
 * @type {React.FC<>}
 */
const CreditsButton = () => {
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
				title="Credits"
				onClick={onClick}
			>
				Credits
			</Button>
			<Modal open={open} onClose={toggle}>
				<div>SCRUM TEAM and TESTING TEST</div>
			</Modal>
		</Fragment>
	);
};

export default CreditsButton;
