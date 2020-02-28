import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import CouponsPerClick from '../../components/upgrades-grid/coupons-per-click';
import CouponsPerSecond from '../../components/upgrades-grid/coupons-per-second';
import {
	COUPONS_PER_CLICK_SECTION_MINIMUM,
	COUPONS_PER_SECOND_SECTION_MINIMUM
} from '../../constants/upgrades';

const mapStateToProps = state => ({
	coupons: state.CouponsReducer.coupons
});

const Upgrades = ({ coupons }) => {
	// The component Hierarchy to return.

	const shouldShowCouponsPerClick = coupons > COUPONS_PER_CLICK_SECTION_MINIMUM;
	const shouldShowCouponsSecond = coupons > COUPONS_PER_SECOND_SECTION_MINIMUM;

	return (
		<Fragment>
			{shouldShowCouponsPerClick ? <CouponsPerClick /> : null}
			{shouldShowCouponsSecond ? <CouponsPerSecond /> : null}
		</Fragment>
	);
};

export default connect(mapStateToProps)(Upgrades);
