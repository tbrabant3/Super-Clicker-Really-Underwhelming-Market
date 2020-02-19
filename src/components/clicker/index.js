import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 275
    }
}));

const ClickableImage = () =>
{
    const classes = useStyles();

    const [count, setCount] = useState(0);
    const incrementCounter = () => setCount(count + 1);

    return (
        <Card className={classes.root} onClick={incrementCounter}>
            <CardContent>
                <img src={require('../../images/murdermart.png')} alt="murdermart"/>
                <Typography variant={'h5'}>
                    { count }
                </Typography>
            </CardContent>
        </Card>
    )

};

export default ClickableImage;