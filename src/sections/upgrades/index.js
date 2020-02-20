import React, { Fragment } from 'react';
import BottomNavigationMenu from '../../components/bottom-navigation-menu';
import Header from '../../components/header';
import PageLayout from '../../components/page-layout';
import UpgradeGrid from '../../components/upgrades-grid';

const Upgrades = () => {
	// The component Hierarchy to return.
	return (
		<Fragment>
			<Header />
			<PageLayout>
				<UpgradeGrid />
			</PageLayout>
			<BottomNavigationMenu />
		</Fragment>
	);
};

export default Upgrades;
