import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
	UPGRADE_COUPON_BOOK,
	UPGRADE_COUPON_STAMP
} from '../../constants/upgrades';
import { connect } from 'react-redux';
import { addCouponAmount } from '../../redux/actions';
import Button from '@material-ui/core/Button';

const mapStateToProps = state => {
	return {
		books: state.UpgradesReducer.upgrades[UPGRADE_COUPON_BOOK],
		stamps: state.UpgradesReducer.upgrades[UPGRADE_COUPON_STAMP]
	};
};

const ExampleCount = ({ dispatch, books, stamps }) => {
	const addCoupons = () =>
		dispatch(addCouponAmount({ amount: books * 0.1 + stamps * 0.5 }));
	return <Button onClick={addCoupons}>{'Try Adding'}</Button>;
};

export default connect(mapStateToProps)(ExampleCount);
