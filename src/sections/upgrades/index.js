import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import CouponsPerClick from '../../components/upgrades-grid/coupons-per-click';
import CouponsPerSecond from '../../components/upgrades-grid/coupons-per-second';

const mapStateToProps = state => ({
	coupons: state.CouponsReducer.coupons
});

const Upgrades = ({ coupons }) => {
	// The component Hierarchy to return.

	const shouldShowCouponsPerClick = coupons > 19;
	const shouldShowCouponsSecond = coupons > 999;

	return (
		<Fragment>
			{shouldShowCouponsPerClick ? <CouponsPerClick /> : null}
			{shouldShowCouponsSecond ? <CouponsPerSecond /> : null}
		</Fragment>
	);
};

export default connect(mapStateToProps)(Upgrades);
