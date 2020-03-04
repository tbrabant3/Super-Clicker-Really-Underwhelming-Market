import React, { Fragment } from 'react';
import CouponsPerClick from '../../components/upgrades-grid/coupons-per-click';
import CouponsPerSecond from '../../components/upgrades-grid/coupons-per-second';
import Grid from '@material-ui/core/Grid';
import ClickableImage from '../../components/clicker';
import { useMediaQuery, useTheme } from '@material-ui/core';

const Upgrades = () => {
	// The component Hierarchy to return.

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Grid container>
			{matches ? <ClickableImage /> : <CouponsPerClick />}
			{matches ? <CouponsPerClick /> : <ClickableImage />}
			<CouponsPerSecond />
		</Grid>
	);
};

export default Upgrades;
