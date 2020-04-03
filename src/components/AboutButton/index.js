import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
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

const AboutButton = () => {
	const classes = useStyles();
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
				<div className={classes.paper}>
					<Typography variant={'h4'}>{'Click the table!'}</Typography>
				</div>
			</Modal>
		</Fragment>
	);
};

export default AboutButton;
