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

const CountIncrease = ({ dispatch, books, stamps, printers }) => {

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(addCouponAmount({ amount: books + stamps + printers }));
		}, 1000);
		return () => clearInterval(interval);
	}, [books, stamps, printers]);

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(addCouponAmount({ amount: stamps * 5 }));
		}, 1000);
		return () => clearInterval(interval);
	}, [stamps]);

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(addCouponAmount({ amount: printers * 10 }));
		}, 1000);
		return () => clearInterval(interval);
	}, [printers]);

	return null;
};

export default connect(mapStateToProps)(CountIncrease);
