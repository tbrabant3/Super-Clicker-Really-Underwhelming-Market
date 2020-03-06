import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import UpgradeButton from '../upgrade-button';
import * as Constants from '../../../constants/upgrades';
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { COUPONS_PER_CLICK_SECTION_MINIMUM } from '../../../constants/upgrades';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(1)
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
}));

const mapStateToProps = state => ({
	coupons: state.CouponsReducer.coupons
});

const CouponsPerClick = ({ coupons }) => {
	const classes = useStyles();

	const shouldShowCouponsPerClick = coupons > COUPONS_PER_CLICK_SECTION_MINIMUM;

	return (
		<Grid item xs={12} md={3} className={classes.root}>
			{shouldShowCouponsPerClick && (
				<Fragment>
					<Typography variant={'h6'}>{'Click Upgrades'}</Typography>
					<Grid
						container
						spacing={1}
						direction={'column'}
						alignItems={'stretch'}
					>
						<UpgradeButton
							className={classes.paper}
							name={'Rusty Scissors'}
							upgradeName={Constants.UPGRADE_RUSTY_SCISSORS}
							upgradeCost={Constants.UPGRADE_RUSTY_SCISSORS_COST}
						/>
						<UpgradeButton
							className={classes.paper}
							name={'Good Scissors'}
							upgradeName={Constants.UPGRADE_GOOD_SCISSORS}
							upgradeCost={Constants.UPGRADE_GOOD_SCISSORS_COST}
						/>
						<UpgradeButton
							className={classes.paper}
							name={'Ambidextrous Scissors'}
							upgradeName={Constants.UPGRADE_AMBIDEXTROUS_SCISSORS}
							upgradeCost={Constants.UPGRADE_AMBIDEXTROUS_SCISSORS_COST}
						/>
						<UpgradeButton
							className={classes.paper}
							name={'Industrial Strength Scissors'}
							upgradeName={Constants.UPGRADE_INDUSTRIAL_SCISSORS}
							upgradeCost={Constants.UPGRADE_INDUSTRIAL_SCISSORS_COST}
						/>
						<UpgradeButton
							className={classes.paper}
							name={'Giant Ceremonial Scissors'}
							upgradeName={Constants.UPGRADE_CEREMONIAL_SCISSORS}
							upgradeCost={Constants.UPGRADE_CEREMONIAL_SCISSORS_COST}
						/>
						<UpgradeButton
							className={classes.paper}
							name={'Slightly Magical Scissors'}
							upgradeName={Constants.UPGRADE_SLIGHT_MAGIC_SCISSORS}
							upgradeCost={Constants.UPGRADE_SLIGHT_MAGIC_SCISSORS_COST}
						/>
						<UpgradeButton
							className={classes.paper}
							name={'Mythical Scissors'}
							upgradeName={Constants.UPGRADE_MYTHICAL_SCISSORS}
							upgradeCost={Constants.UPGRADE_MYTHICAL_SCISSORS_COST}
						/>
					</Grid>
				</Fragment>
			)}
		</Grid>
	);
};

export default connect(mapStateToProps)(CouponsPerClick);
