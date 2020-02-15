import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    page: {
        padding: theme.spacing(2)
    }
}));

// This component can be used as the parent to all main page components,
// to allow for spacing and other css consistency.
const PageLayout = ({children}) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.page}>
            {children}
        </Grid>
    );
};

export default PageLayout;