import React, { Fragment } from 'react';
import CouponsPerClick from '../../components/upgrades-grid/coupons-per-click';
import CouponsPerSecond from '../../components/upgrades-grid/coupons-per-second';
import Grid from '@material-ui/core/Grid';
import ClickableImage from '../../components/clicker';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	centerPage: {
		[theme.breakpoints.up('md')]: {
			height: '90vh',
			padding: theme.spacing(2)
		}
	},
	centerJustify: {
		[theme.breakpoints.up('md')]: {
			justifyContent: 'space-between',
			padding: theme.spacing(2)
		},
		[theme.breakpoints.down('md')]: {
			justifyContent: 'center',
			padding: theme.spacing(2)
		}
	}
}));

const Upgrades = () => {
	// The component Hierarchy to return.

	const classes = useStyles();

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));



	return (
		<Grid
			container
			direction={'column'}
			justify={'center'}
			alignItems={'center'}
			className={classes.centerPage}
		>
			<Grid item container className={classes.centerJustify}>
				{matches ? null : <CouponsPerClick />}
				<ClickableImage />
				{matches ? <CouponsPerClick /> : null}
				<CouponsPerSecond />
			</Grid>
		</Grid>
	);
};

export default Upgrades;
