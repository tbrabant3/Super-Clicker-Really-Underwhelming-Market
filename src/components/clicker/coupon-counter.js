import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const mapStateToProps = state => ({
	coupons: state.CouponsReducer.coupons
});

const useStyles = makeStyles(theme => ({
	root: {
		position: 'absolute'
	}
}));

const CouponCounter = ({ coupons }) => {
	const classes = useStyles();

	return (
		<Typography variant={'h5'} className={classes.root}>
			{coupons}
		</Typography>
	);
};

export default connect(mapStateToProps)(CouponCounter);
