import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ClickButton from './button';
import { addCouponAmount, incrementCouponCount } from '../../redux/actions';
import { connect } from 'react-redux';
import CouponCounter from './coupon-counter';
import {
	COUPON_UPGRADE_ADDS_DICTIONARY,
	UPGRADE_COUPON_BOOK
} from '../../constants/upgrades';

const useStyles = makeStyles(theme => ({
	root: {
		minWidth: theme.spacing(10)
	}
}));

const mapStateToProps = state => {
	return {
		books: state.UpgradesReducer.upgrades[UPGRADE_COUPON_BOOK]
	};
};

const ClickableImage = ({ dispatch, books }) => {
	const classes = useStyles();

	const numberOfCouponsToAdd =
		Math.round(books * COUPON_UPGRADE_ADDS_DICTIONARY[UPGRADE_COUPON_BOOK]) + 1;

	const incrementCounter = () =>
		dispatch(addCouponAmount({ amount: numberOfCouponsToAdd }));

	const ContentSection = () => (
		<Grid container justify={'center'}>
			<Grid container item justify={'center'} xs={12}>
				<ClickButton onClick={incrementCounter} />
			</Grid>
			<Grid container item justify={'center'} xs={12}>
				<CouponCounter />
			</Grid>
		</Grid>
	);

	return (
		<Card className={classes.root}>
			<CardContent>
				<ContentSection />
			</CardContent>
		</Card>
	);
};

export default connect(mapStateToProps)(ClickableImage);
