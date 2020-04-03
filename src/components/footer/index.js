import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import GitHubButton from './githubButton';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

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

/**
 * @type {React.FC<React.PropsWithChildren<{}>>}
 */
const Footer = ({ children }) => {
	const classes = useStyles();

	const [creditsOpen, setCreditsOpen] = React.useState(false);

	const toggleCreditsOpen = () => {
		setCreditsOpen(!creditsOpen);
	};

	const [aboutOpen, setAboutOpen] = React.useState(false);

	const toggleAboutOpen = () => {
		setAboutOpen(!aboutOpen);
	};

	return (
		<Fragment>
			{children}
			<GitHubButton />
			<Button
				variant="contained"
				color="primary"
				size={'large'}
				title="About"
				onClick={toggleAboutOpen}
			>
				About
			</Button>
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

export default Footer;
