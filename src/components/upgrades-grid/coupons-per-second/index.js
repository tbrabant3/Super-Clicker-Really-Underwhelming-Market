import UpgradeButton from '../upgrade-button';
import * as Constants from '../../../constants/upgrades';
import Grid from '@material-ui/core/Grid';
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { COUPONS_PER_SECOND_SECTION_MINIMUM } from '../../../constants/upgrades';
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

const CouponsPerSecond = ({ coupons }) => {
	const classes = useStyles();

	const shouldShowCouponsSecond = coupons > COUPONS_PER_SECOND_SECTION_MINIMUM;

	return (
		<Grid item xs={12} md={3} className={classes.root}>
			{shouldShowCouponsSecond && (
				<Fragment>
					<Typography variant={'h6'}>
						{'Coupons Per Second Upgrades'}
					</Typography>
					<Grid
						container
						spacing={1}
						justify={'center'}
						direction={'column'}
						alignItems={'stretch'}
					>
						<UpgradeButton
							className={classes.paper}
							name={'Coupon Book'}
							upgradeName={Constants.UPGRADE_COUPON_BOOK}
							upgradeCost={Constants.COUPON_UPGRADE_COST_DICTIONARY[Constants.UPGRADE_COUPON_BOOK]}
						/>
						<UpgradeButton
							className={classes.paper}
							name={'Coupon Stamp'}
							upgradeName={Constants.UPGRADE_COUPON_STAMP}
							upgradeCost={Constants.COUPON_UPGRADE_COST_DICTIONARY[Constants.UPGRADE_COUPON_STAMP]}
						/>
						<UpgradeButton
							className={classes.paper}
							name={'Coupon Printer'}
							upgradeName={Constants.UPGRADE_COUPON_PRINTER}
							upgradeCost={Constants.COUPON_UPGRADE_COST_DICTIONARY[Constants.UPGRADE_COUPON_PRINTER]}
						/>
						<UpgradeButton
							className={classes.paper}
							name={'Coupon Store'}
							upgradeName={Constants.UPGRADE_COUPON_STORE}
							upgradeCost={Constants.COUPON_UPGRADE_COST_DICTIONARY[Constants.UPGRADE_COUPON_STORE]}
						/>
						<UpgradeButton
							className={classes.paper}
							name={'Coupon Factory'}
							upgradeName={Constants.UPGRADE_COUPON_FACTORY}
							upgradeCost={Constants.COUPON_UPGRADE_COST_DICTIONARY[Constants.UPGRADE_COUPON_FACTORY]}
						/>
						<UpgradeButton
							className={classes.paper}
							name={'Coupon Corporation'}
							upgradeName={Constants.UPGRADE_COUPON_CORPORATION}
							upgradeCost={Constants.COUPON_UPGRADE_COST_DICTIONARY[Constants.UPGRADE_COUPON_CORPORATION]}
						/>
					</Grid>
				</Fragment>
			)}
		</Grid>
	);
};

export default connect(mapStateToProps)(CouponsPerSecond);
