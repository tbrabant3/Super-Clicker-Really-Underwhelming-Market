import UpgradeButton from '../upgrade-button';
import * as Constants from '../../../constants/upgrades';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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

const CouponsPerSecond = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography variant={'h6'}>{'Coupons Per Second Upgrades'}</Typography>
			<Grid container spacing={1} justify={'center'}>
				<UpgradeButton
					className={classes.paper}
					name={'Coupon Book'}
					upgradeName={Constants.UPGRADE_COUPON_BOOK}
				/>
				<UpgradeButton
					className={classes.paper}
					name={'Coupon Stamp'}
					upgradeName={Constants.UPGRADE_COUPON_STAMP}
				/>
				<UpgradeButton
					className={classes.paper}
					name={'Coupon Printer'}
					upgradeName={Constants.UPGRADE_COUPON_PRINTER}
				/>
				<UpgradeButton
					className={classes.paper}
					name={'Coupon Store'}
					upgradeName={Constants.UPGRADE_COUPON_STORE}
				/>
				<UpgradeButton
					className={classes.paper}
					name={'Coupon Factory'}
					upgradeName={Constants.UPGRADE_COUPON_FACTORY}
				/>
				<UpgradeButton
					className={classes.paper}
					name={'Coupon Corporation'}
					upgradeName={Constants.UPGRADE_COUPON_CORPORATION}
				/>
			</Grid>
		</div>
	);
};

export default CouponsPerSecond;
