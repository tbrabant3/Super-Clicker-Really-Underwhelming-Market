import { addUpgrade, subtractCouponAmount } from '../../redux/actions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import * as Upgrades from '../../constants/upgrades';
import { Snackbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const mapStateToProps = state => {
	return {
		coupons: state.CouponsReducer.coupons,
		upgrades: state.UpgradesReducer.upgrades
	};
};

const UpgradeButton = ({
	dispatch,
	coupons,
	className,
	name,
	upgradeName,
	upgradeCost,
	upgrades,
	numOwned
}) => {
	let upgradeAmount = Math.round(
		Upgrades.COUPON_UPGRADE_BASE_COST_DICTIONARY[upgradeName] +
			Math.pow(
				Upgrades.COUPON_UPGRADE_INCREASE_DICTIONARY[upgradeName],
				upgrades[upgradeName]
			)
	);
	Upgrades.COUPON_UPGRADE_COST_DICTIONARY[upgradeName] = upgradeAmount;
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const toggleSnackbar = () => setSnackbarOpen(true);
	const toggleSnackbarFalse = () => setSnackbarOpen(false);

	const onAddNewUpgrade = () => {
		dispatch(subtractCouponAmount({ amount: upgradeAmount }));
		dispatch(addUpgrade({ upgrade: upgradeName, amount: 1 }));
		toggleSnackbar();
	};

	const addNewUpgradeIfEnoughCoupons = () => {
		if (coupons >= upgradeAmount) {
			onAddNewUpgrade();
		}
	};

	return (
		<Fragment>
			<Grid
				item
				container
				justify={'space-between'}
				alignContent={'space-between'}
			>
				<Button onClick={addNewUpgradeIfEnoughCoupons}>
					<Paper className={className}>{name}</Paper>
				</Button>
				<Typography variant={'5'}>{numOwned}</Typography>
				<Typography variant={'5'}>{upgradeCost}</Typography>
			</Grid>
			<Snackbar
				open={snackbarOpen}
				autoHideDuration={1000}
				onClose={toggleSnackbarFalse}
			>
				<Typography variant={'h5'}>{name + ' Bought'}</Typography>
			</Snackbar>
		</Fragment>
	);
};

export default connect(mapStateToProps)(UpgradeButton);
