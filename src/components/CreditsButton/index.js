import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

const CreditsButton = () => {
	const [creditsOpen, setCreditsOpen] = React.useState(false);

	const toggleCreditsOpen = () => {
		setCreditsOpen(!creditsOpen);
	};

	return (
		<Fragment>
			<Button
				variant="contained"
				color="primary"
				size={'large'}
				title="Credits"
				onClick={toggleCreditsOpen}
			>
				Credits
			</Button>
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={creditsOpen}
				onClose={toggleCreditsOpen}
			>
				<div>
					<Typography variant={'h4'}>
						{'Made by the original dev team.'}
					</Typography>
				</div>
			</Modal>
		</Fragment>
	);
};

export default CreditsButton;
