import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

const AboutButton = () => {
	const [aboutOpen, setAboutOpen] = React.useState(false);

	const toggleAboutOpen = () => {
		setAboutOpen(!aboutOpen);
	};

	return (
		<Fragment>
			<Button
				variant="contained"
				color="primary"
				size={'large'}
				title="About"
				onClick={toggleAboutOpen}
			>
				About
			</Button>
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={aboutOpen}
				onClose={toggleAboutOpen}
			>
				<div>
					<Typography variant={'h4'}>{'Click the table!'}</Typography>
				</div>
			</Modal>
		</Fragment>
	);
};

export default AboutButton;
