import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import UpgradeButton from '../upgrade-button';
import * as Constants from '../../../constants/upgrades';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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

const CouponsPerClick = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Typography variant={'h6'}>{'Click Upgrades'}</Typography>
			<Grid container spacing={1} justify={'center'}>
				<UpgradeButton
					className={classes.paper}
					name={'Rusty Scissors'}
					upgradeName={Constants.UPGRADE_RUSTY_SCISSORS}
				/>
				<UpgradeButton
					className={classes.paper}
					name={'Good Scissors'}
					upgradeName={Constants.UPGRADE_GOOD_SCISSORS}
				/>
				<UpgradeButton
					className={classes.paper}
					name={'Ambidextrous Scissors'}
					upgradeName={Constants.UPGRADE_AMBIDEXTROUS_SCISSORS}
				/>
				<UpgradeButton
					className={classes.paper}
					name={'Industrial Strength Scissors'}
					upgradeName={Constants.UPGRADE_INDUSTRIAL_SCISSORS}
				/>
				<UpgradeButton
					className={classes.paper}
					name={'Giant Ceremonial Scissors'}
					upgradeName={Constants.UPGRADE_CEREMONIAL_SCISSORS}
				/>
				<UpgradeButton
					className={classes.paper}
					name={'Slightly Magical Scissors'}
					upgradeName={Constants.UPGRADE_SLIGHT_MAGIC_SCISSORS}
				/>
				<UpgradeButton
					className={classes.paper}
					name={'Mythical Scissors'}
					upgradeName={Constants.UPGRADE_MYTHICAL_SCISSORS}
				/>
			</Grid>
		</div>
	);
};

export default CouponsPerClick;
