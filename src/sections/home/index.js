import React, { Fragment } from 'react';
import Header from '../../components/header';
import PageLayout from '../../components/page-layout';
import ClickableImage from '../../components/clicker';
import Upgrades from '../upgrades';
import { connect } from 'react-redux';
import CountIncrease from '../../components/upgrades-per-second';

const mapStateToProps = state => ({
	coupons: state.CouponsReducer.coupons
});

const Home = ({ coupons }) => {
	// The component Hierarchy to return.

	const shouldShowUpgradesSection = coupons > 19;

	return (
		<Fragment>
			<Header />
			<PageLayout>
				<ClickableImage />
				{shouldShowUpgradesSection ? <Upgrades /> : null}
				<CountIncrease />
			</PageLayout>
		</Fragment>
	);
};

export default connect(mapStateToProps)(Home);
