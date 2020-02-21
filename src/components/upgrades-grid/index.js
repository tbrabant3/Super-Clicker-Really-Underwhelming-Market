import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ClickButton from './button';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(1)
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
}));

const UpgradeButton = ({ className, name }) => (
	<Grid item>
		<Button>
			<Paper className={className}>{name}</Paper>
		</Button>
	</Grid>
);

const UpgradeGrid = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={1} justify={'center'}>
				<UpgradeButton className={classes.paper} name={'Murder Mart'} />
				<UpgradeButton className={classes.paper} name={'Kwik Stop'} />
				<UpgradeButton className={classes.paper} name={'Hannafords'} />
				<UpgradeButton className={classes.paper} name={'Price Chopper'} />
				<UpgradeButton className={classes.paper} name={'Market 32'} />
				<UpgradeButton className={classes.paper} name={'City Market'} />
				<UpgradeButton className={classes.paper} name={'Whole Foods'} />
				<UpgradeButton className={classes.paper} name={'Price Empire'} />
			</Grid>
		</div>
	);
};

export default UpgradeGrid;
