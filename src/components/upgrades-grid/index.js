import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import UpgradeButton from './upgrade-button';
import {
	UPGRADE_COUPON_BOOK,
	UPGRADE_COUPON_FACTORY,
	UPGRADE_COUPON_PRINTER,
	UPGRADE_COUPON_STAMP,
	UPGRADE_COUPON_STORE
} from '../../constants/upgrades';

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

const UpgradeGrid = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={1} justify={'center'}>
				<UpgradeButton
					className={classes.paper}
					name={'Coupon Book'}
					upgradeName={UPGRADE_COUPON_BOOK}
				/>
				<UpgradeButton
					className={classes.paper}
					name={'Coupon Stamp'}
					upgradeName={UPGRADE_COUPON_STAMP}
				/>
				<UpgradeButton
					className={classes.paper}
					name={'Coupon Printer'}
					upgradeName={UPGRADE_COUPON_PRINTER}
				/>
				<UpgradeButton
					className={classes.paper}
					name={'Coupon Store'}
					upgradeName={UPGRADE_COUPON_STORE}
				/>
				<UpgradeButton
					className={classes.paper}
					name={'Coupon Factory'}
					upgradeName={UPGRADE_COUPON_FACTORY}
				/>
			</Grid>
		</div>
	);
};

export default UpgradeGrid;
