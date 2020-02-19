import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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

    const ContentSection = () =>
        (
            <Grid container justify={'center'}>
                <Grid container item justify={'center'} xs={12}>
                    <img src={require('../../images/murdermart.png')} alt="murdermart"/>
                </Grid>
                <Grid container item justify={'center'} xs={12}>
                    <Typography variant={'h5'}>
                        { count }
                    </Typography>
                </Grid>
            </Grid>
        );

    return (
        <Card className={classes.root} onClick={incrementCounter}>
            <CardContent>
                <ContentSection/>
            </CardContent>
        </Card>
    )

};

export default ClickableImage;