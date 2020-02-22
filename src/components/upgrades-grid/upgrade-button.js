import { addUpgrade } from '../../redux/actions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { connect } from 'react-redux';

const UpgradeButton = ({ dispatch, className, name, upgradeName }) => {
	const onAddNewUpgrade = () =>
		dispatch(addUpgrade({ upgrade: upgradeName, amount: 1 }));

	return (
		<Grid item>
			<Button onClick={onAddNewUpgrade}>
				<Paper className={className}>{name}</Paper>
			</Button>
		</Grid>
	);
};

export default connect()(UpgradeButton);
