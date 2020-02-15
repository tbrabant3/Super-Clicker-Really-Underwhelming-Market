import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    page: {
        padding: theme.spacing(2)
    }
}));

const PageLayout = ({children}) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.page}>
            {children}
        </Grid>
    );
};

export default PageLayout;