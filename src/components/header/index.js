import AppBar from '@material-ui/core/AppBar';
import { Switch, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_LIGHT_DARK_THEME } from '../../redux/actions/actions';

const Header = () => {
	const headerData = useSelector(state => state.ThemeReducer.theme);
	const dispatch = useDispatch();

	const toggleOn = headerData === 'dark';

	return (
		<Fragment>
			<AppBar position={'static'}>
				<Toolbar>
					<Typography variant={'h6'}>
						{'SUPER CLICKER REALLY UNDERWHELMING MARKET'}
						{headerData}
					</Typography>
					<Switch
						checked={toggleOn}
						onChange={() => dispatch({ type: TOGGLE_LIGHT_DARK_THEME })}
					/>
				</Toolbar>
			</AppBar>
		</Fragment>
	);
};

export default Header;
