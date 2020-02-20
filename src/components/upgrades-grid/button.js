import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const image = {
	width: '100%'
};

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		minWidth: 300,
		width: '100%'
	},
	image: {
		position: 'relative',
		height: 200,
		[theme.breakpoints.down('xs')]: {
			width: '100% !important', // Overrides inline-style
			height: 100
		},
		'&:hover, &$focusVisible': {
			zIndex: 1,
			'& $imageBackdrop': {
				opacity: 0.15
			},
			'& $imageMarked': {
				opacity: 0
			},
			'& $imageTitle': {
				border: '4px solid currentColor'
			}
		}
	},
	focusVisible: {},

	imageSrc: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: 'cover',
		backgroundPosition: 'center 40%'
	},

	imageTitle: {
		position: 'relative',
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
			6}px`
	}
}));

export default function ClickButton() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<ButtonBase
				focusRipple
				className={classes.image}
				focusVisibleClassName={classes.focusVisible}
				style={{
					width: image.width
				}}
			>
				<span
					className={classes.imageSrc}
					style={{
						backgroundImage: `url(${image.url})`
					}}
				/>
			</ButtonBase>
		</div>
	);
}
