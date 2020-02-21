import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import ClickButton from './button';
import { incrementCouponCount } from '../../redux/actions';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
	root: {
		minWidth: 275
	}
}));

const mapStateToProps = state => ({
	coupons: state.CouponsReducer.coupons
});

const ClickableImage = ({ coupons, dispatch }) => {
	const classes = useStyles();
	const incrementCounter = () => dispatch(incrementCouponCount());

	const ContentSection = () => (
		<Grid container justify={'center'}>
			<Grid container item justify={'center'} xs={12}>
				<ClickButton />
			</Grid>
			<Grid container item justify={'center'} xs={12}>
				<Typography variant={'h5'}>{coupons}</Typography>
			</Grid>
		</Grid>
	);

	return (
		<Card className={classes.root} onClick={incrementCounter}>
			<CardContent>
				<ContentSection />
			</CardContent>
		</Card>
	);
};

export default connect(mapStateToProps)(ClickableImage);
