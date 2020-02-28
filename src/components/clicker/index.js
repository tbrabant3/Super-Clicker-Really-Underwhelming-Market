import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ClickButton from './button';
import { addCouponAmount } from '../../redux/actions';
import { connect } from 'react-redux';
import CouponCounter from './coupon-counter';
import * as Upgrades from '../../constants/upgrades';

const useStyles = makeStyles(theme => ({
	root: {
		minWidth: theme.spacing(10)
	}
}));

const mapStateToProps = state => {
	return {
		rusty: state.UpgradesReducer.upgrades[Upgrades.UPGRADE_RUSTY_SCISSORS],
		good: state.UpgradesReducer.upgrades[Upgrades.UPGRADE_GOOD_SCISSORS],
		ambi:
			state.UpgradesReducer.upgrades[Upgrades.UPGRADE_AMBIDEXTROUS_SCISSORS],
		indus: state.UpgradesReducer.upgrades[Upgrades.UPGRADE_INDUSTRIAL_SCISSORS],
		cerem: state.UpgradesReducer.upgrades[Upgrades.UPGRADE_CEREMONIAL_SCISSORS],
		magic:
			state.UpgradesReducer.upgrades[Upgrades.UPGRADE_SLIGHT_MAGIC_SCISSORS],
		mythic: state.UpgradesReducer.upgrades[Upgrades.UPGRADE_MYTHICAL_SCISSORS]
	};
};

const ClickableImage = ({
	dispatch,
	rusty,
	good,
	ambi,
	indus,
	cerem,
	magic,
	mythic
}) => {
	const classes = useStyles();

	const CouponsToAdd =
		Math.round(
			rusty *
				Upgrades.COUPON_UPGRADE_ADDS_DICTIONARY[
					Upgrades.UPGRADE_RUSTY_SCISSORS
				] +
				good *
					Upgrades.COUPON_UPGRADE_ADDS_DICTIONARY[
						Upgrades.UPGRADE_GOOD_SCISSORS
					] +
				ambi *
					Upgrades.COUPON_UPGRADE_ADDS_DICTIONARY[
						Upgrades.UPGRADE_AMBIDEXTROUS_SCISSORS
					] +
				indus *
					Upgrades.COUPON_UPGRADE_ADDS_DICTIONARY[
						Upgrades.UPGRADE_INDUSTRIAL_SCISSORS
					] +
				cerem *
					Upgrades.COUPON_UPGRADE_ADDS_DICTIONARY[
						Upgrades.UPGRADE_CEREMONIAL_SCISSORS
					] +
				magic *
					Upgrades.COUPON_UPGRADE_ADDS_DICTIONARY[
						Upgrades.UPGRADE_SLIGHT_MAGIC_SCISSORS
					] +
				mythic *
					Upgrades.COUPON_UPGRADE_ADDS_DICTIONARY[
						Upgrades.UPGRADE_MYTHICAL_SCISSORS
					]
		) + 1;

	const incrementCounter = () =>
		dispatch(addCouponAmount({ amount: CouponsToAdd }));

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
