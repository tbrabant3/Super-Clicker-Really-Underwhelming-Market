import image from '../../images/desk1foreground.png';
import Button from '@material-ui/core/Button';
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as Upgrades from '../../constants/upgrades';
import { addCouponAmount } from '../../redux/actions';
import { connect } from 'react-redux';

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

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		minWidth: 300,
		backgroundImage: 'url(/desk1background.png)',
		height: theme.spacing(65),
		width: theme.spacing(61)
	},
	image: {
		position: 'absolute',
		width: 'inherit',
		height: 'inherit',

		'&:hover, &$focusVisible': {
			backgroundColor: 'transparent'
		}
	},
	imageSrc: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		userDrag: 'none',
		backgroundSize: 'cover',
		backgroundPosition: 'center 40%',
		transform: 'scale(1,1)',
		'&:active': {
			transform: 'scale(0.9, 0.9)'
		},
		transition: 'transform 0.1s',
		transformOrigin: 'center'
	}
}));

const SimpleButton = ({
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

	return (
		<Fragment>
			<div>
				<Button
					disableTouchRipple
					disableFocusRipple
					className={classes.image}
					onClick={incrementCounter}
				>
					<img src={image} className={classes.imageSrc} alt={'desk'} />
				</Button>
			</div>
		</Fragment>
	);
};

export default connect(mapStateToProps)(SimpleButton);
