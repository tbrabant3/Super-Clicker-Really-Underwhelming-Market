import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addCouponAmount } from '../../redux/actions';
import {
	UPGRADE_COUPON_BOOK,
	UPGRADE_COUPON_PRINTER,
	UPGRADE_COUPON_STAMP
} from '../../constants/upgrades';

const mapStateToProps = state => {
	return {
		books: state.UpgradesReducer.upgrades[UPGRADE_COUPON_BOOK],
		stamps: state.UpgradesReducer.upgrades[UPGRADE_COUPON_STAMP],
		printers: state.UpgradesReducer.upgrades[UPGRADE_COUPON_PRINTER]
	};
};

const IncreaseOverTime = ({ dispatch, books, stamps, printers }) => {
	useEffect(() => {
		const timer = setInterval(
			() =>
				dispatch(
					addCouponAmount({ amount: books + stamps * 2 + printers * 3 })
				),
			500
		);
		return () => clearTimeout(timer);
	});

	return null;
};

export default connect(mapStateToProps)(IncreaseOverTime);
