import React from 'react';
import { GitHub } from '@material-ui/icons';
import { Button } from '@material-ui/core';

const GitHubButton = () => {
	/**
	 *
	 * @param {React.MouseEvent<HTMLAnchorElement, MouseEvent>} e
	 */
	const onClick = e => {
		window.open(
			'https://github.com/tbrabant3/Super-Clicker-Really-Underwhelming-Market',
			'_blank'
		);
	};

	return (
		<Button
			variant="contained"
			color="secondary"
			startIcon={<GitHub />}
			size={'large'}
			title="Github"
			onClick={onClick}
		>
			Github
		</Button>
	);
};

export default GitHubButton;
