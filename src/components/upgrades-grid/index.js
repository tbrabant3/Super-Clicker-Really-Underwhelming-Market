import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ClickButton from './button';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
}));

export default function UpgradeGrid() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={3}>
					<Paper className={classes.paper}>Murder Mart</Paper>
					<ClickButton />
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>Kwik Stop</Paper>
					<ClickButton />
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>Hannafords</Paper>
					<ClickButton />
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>Price Chopper</Paper>
					<ClickButton />
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>Market 32</Paper>
					<ClickButton />
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>City Market</Paper>
					<ClickButton />
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>Whole Foods</Paper>
					<ClickButton />
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>Price Empire</Paper>
					<ClickButton />
				</Grid>
			</Grid>
		</div>
	);
}
