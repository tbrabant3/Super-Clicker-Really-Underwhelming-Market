import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const mapStateToProps = state => ({
	coupons: state.CouponsReducer.coupons,
	coupons_per_second: state.CPSReducer.coupons_per_second
});

const useStyles = makeStyles(theme => ({
	root: {
		position: 'absolute'
	}
}));

const CouponCounter = ({ coupons, coupons_per_second }) => {
	const classes = useStyles();

	return (
		<Grid container justify={'center'} spacing={2} className={classes.root}>
			<Grid item container justify={'center'} xs={12}>
				<Typography variant={'h5'}>{coupons}</Typography>
			</Grid>
			<Grid item>
				<Typography variant={'h5'}>{'CPS: ' + coupons_per_second}</Typography>
			</Grid>
		</Grid>
	);
};

export default connect(mapStateToProps)(CouponCounter);
