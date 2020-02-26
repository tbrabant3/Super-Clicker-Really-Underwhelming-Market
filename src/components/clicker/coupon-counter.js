import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

const mapStateToProps = state => ({
	coupons: state.CouponsReducer.coupons
});

const CouponCounter = ({ coupons }) => {
	return <Typography variant={'h5'}>{coupons}</Typography>;
};

export default connect(mapStateToProps)(CouponCounter);
