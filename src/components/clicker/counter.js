import React, { useState } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const mapStateToProps = state => ({
	coupons: state.CouponsReducer.coupons
});

const Counter = ({coupons}) => (<Grid container item justify={'center'} xs={12}>
<Typography variant={'h5'}>{coupons}</Typography>
</Grid>);

export default connect(mapStateToProps)(Counter);