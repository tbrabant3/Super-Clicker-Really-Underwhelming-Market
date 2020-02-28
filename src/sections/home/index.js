import React, { Fragment } from 'react';
import Header from '../../components/header';
import PageLayout from '../../components/page-layout';
import ClickableImage from '../../components/clicker';
import Upgrades from '../upgrades';

const Home = () => {
	// The component Hierarchy to return.

	return (
		<Fragment>
			<Header />
			<PageLayout>
				<ClickableImage />
				<Upgrades />
			</PageLayout>
		</Fragment>
	);
};

export default Home;
