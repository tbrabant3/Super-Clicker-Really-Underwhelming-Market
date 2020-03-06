import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ClickButton from './button';
import CouponCounter from './coupon-counter';

const useStyles = makeStyles(theme => ({
	root: {
		minWidth: theme.spacing(10),
		minHeight: theme.spacing(79)
	}
}));

const ClickableImage = () => {
	const classes = useStyles();

	const ContentSection = () => (
		<Grid container justify={'center'}>
			<Grid container item justify={'center'} xs={12}>
				<ClickButton />
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

export default ClickableImage;
