import image from '../../images/desk1foreground.png';
import Button from '@material-ui/core/Button';
import React from 'react';

const SimpleButton = () => (
	<Button disableTouchRipple className={classes.image} onClick={onClick}>
		<img src={image} className={classes.imageSrc} alt={'desk'} />
	</Button>
);

export default SimpleButton;
