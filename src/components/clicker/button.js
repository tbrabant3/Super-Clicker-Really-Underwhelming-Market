import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import image from '../../images/desk1foreground.png';
import GlCanvas from './glcanvas';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		minWidth: 300,
		width: '100%',
		backgroundImage: 'url(/desk1background.png)',
		height: theme.spacing(65),
		width: theme.spacing(61)
	},
	image: {
		position: 'relative',
	    width: '100%',
    	height: '100%',
	
		
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
		},
		
	},
	imageSrc: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		userDrag: 'none',
		backgroundSize: 'cover',
		backgroundPosition: 'center 40%',
		transform: 'scale(1,1)',
		'&:active': {
			transform: 'scale(0.9, 0.9)'
		},
		transition: 'transform 0.1s',
		transformOrigin: 'center',
	}
}));

const ClickButton = ({ onClick }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<ButtonBase
				disableTouchRipple
				className={classes.image}
				onClick={onClick}
			>
				<img src={image} className={classes.imageSrc} alt={'desk'} />
				<GlCanvas></GlCanvas>
			</ButtonBase>
		</div>
	);
};

export default ClickButton;
