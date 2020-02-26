import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ClickButton from './button';
import { incrementCouponCount } from '../../redux/actions';
import { connect } from 'react-redux';
import CouponCounter from './coupon-counter';

const useStyles = makeStyles(theme => ({
	root: {
		minWidth: theme.spacing(10)
	}
}));




const ClickableImage = ({ dispatch }) => {
	const classes = useStyles();
	const incrementCounter = () => dispatch(incrementCouponCount());

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

export default connect()(ClickableImage);
