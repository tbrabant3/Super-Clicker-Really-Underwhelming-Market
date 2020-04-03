import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2, 4, 3),
		top: '50%',
		left: '50%'
	}
}));

const CreditsButton = () => {
	const classes = useStyles();

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
				<div className={classes.paper}>
					<Typography variant={'h4'}>
						{'Made by the original dev team.'}
					</Typography>
				</div>
			</Modal>
		</Fragment>
	);
};

export default CreditsButton;