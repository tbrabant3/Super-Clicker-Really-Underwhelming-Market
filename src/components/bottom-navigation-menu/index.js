import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import ExposureRoundedIcon from '@material-ui/icons/ExposureRounded';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	bottomNavigation: {
		width: '100%',
		position: 'fixed',
		bottom: 0
	}
});

const BottomNavigationMenu = () => {
	// These are CSS style classes, which we can
	// put on any component that we like.
	const classes = useStyles();

	// useState is a function use to store local page state;
	// this is essentially a global variable for the whole page,
	// which we can use anywhere in this component. Here we are
	// setting the initial state of this variable, currentBottomNavigation, to 'Home'.
	const [currentBottomNavigation, setCurrentBottomNavigation] = useState(
		'Home'
	);

	// This function can handle button change events from our bottom navigation menu.
	// Event is never used, since we only care about the name of the button we are clicking.
	// This information is available in the second variable passed to the function, newBottomNavigation.
	const handleBottomNavigationChange = (event, newBottomNavigation) => {
		setCurrentBottomNavigation(newBottomNavigation);
	};

	return (
		<BottomNavigation
			value={currentBottomNavigation}
			onChange={handleBottomNavigationChange}
			className={classes.bottomNavigation}
			showLabels
		>
			<BottomNavigationAction
				label={'Home'}
				value={'Home'}
				icon={<AddShoppingCartRoundedIcon />}
			/>
			<BottomNavigationAction
				label={'Upgrades'}
				value={'Upgrades'}
				icon={<ExposureRoundedIcon />}
			/>
			<BottomNavigationAction
				label={'Inventory'}
				value={'Inventory'}
				icon={<LibraryBooksRoundedIcon />}
			/>
		</BottomNavigation>
	);
};

export default BottomNavigationMenu;
