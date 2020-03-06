import React, { Fragment } from 'react';
import Header from '../../components/header';
import Upgrades from '../upgrades';
import CountIncrease from '../../components/upgrades-per-second';

const Home = () => {
	// The component Hierarchy to return.

	return (
		<Fragment>
			<Header />
			<CountIncrease />
			<Upgrades />
		</Fragment>
	);
};

export default Home;
