import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import image from '../../images/desk1forground.png';
import GlCanvas from './glcanvas';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		minWidth: 300,
		width: '100%',
		backgroundImage:'url(/desk1background.png)'
	},
	image: {
		position: 'relative',
		height: theme.spacing(65),
		width: theme.spacing(61),
		transition: 'transform 0.1s',
		transform: 'scale(1,1)',
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
		'&:active': {
			transform: 'scale(0.9, 0.9)'
		}
	},
	imageSrc: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: 'cover',
		backgroundPosition: 'center 40%'
	}
}));

const ClickButton = ({ onClick }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<ButtonBase className={classes.image} onClick={onClick}>
				<img src={image} className={classes.imageSrc} alt={'desk'} />
				<GlCanvas></GlCanvas>
			</ButtonBase>
		</div>
	);
};

export default ClickButton;
