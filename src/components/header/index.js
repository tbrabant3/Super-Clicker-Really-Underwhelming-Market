import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React, { Fragment } from 'react';

// This function creates different classes,
// or groups of styles that we can put on
// any components that we want.

const Header = () => (
	<Fragment>
		<AppBar position={'static'}>
			<Toolbar>
				<Typography variant={'h6'}>
					{'SUPER CLICKER REALLY UNDERWHELMING MARKET'}
				</Typography>
			</Toolbar>
		</AppBar>
	</Fragment>
);

export default Header;
