import React, { Fragment } from 'react';
import Header from '../../components/header';
import Upgrades from '../upgrades';
import CountIncrease from '../../components/upgrades-per-second';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { Collapse, Slide } from '@material-ui/core';

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

const Home = () => {
	// The component Hierarchy to return.

	const classes = useStyles();

	const [open, setOpen] = React.useState(true);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Fragment>
			<Header />
			<CountIncrease />
			<Upgrades />
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={open}
				onClose={handleClose}
			>
				<div className={classes.paper}>
					<Typography variant={'h4'}>
						{'YOU NEED DEALS! GO GET THEM.'}
					</Typography>
				</div>
			</Modal>
		</Fragment>
	);
};

export default Home;
