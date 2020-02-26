import { addUpgrade, subtractCouponAmount } from '../../redux/actions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { COUPON_UPGRADE_COST_DICTIONARY } from '../../constants/upgrades';
import { Snackbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const mapStateToProps = state => {
	return {
		coupons: state.CouponsReducer.coupons
	};
};

const UpgradeButton = ({ dispatch, coupons, className, name, upgradeName }) => {
	const upgradeAmount = COUPON_UPGRADE_COST_DICTIONARY[upgradeName];

	const onAddNewUpgrade = () => {
		dispatch(subtractCouponAmount({ amount: upgradeAmount }));
		dispatch(addUpgrade({ upgrade: upgradeName, amount: 1 }));
	};

	const addNewUpgradeIfEnoughCoupons = () => {
		if (coupons >= upgradeAmount) {
			onAddNewUpgrade();
		}
	};

	return (
		<Fragment>
			<Grid item>
				<Button onClick={addNewUpgradeIfEnoughCoupons}>
					<Paper className={className}>{name}</Paper>
				</Button>
			</Grid>
			<Snackbar open={true} autoHideDuration={6000}>
				<Typography variant={'h5'}>{'test'}</Typography>
			</Snackbar>
		</Fragment>
	);
};

export default connect(mapStateToProps)(UpgradeButton);
