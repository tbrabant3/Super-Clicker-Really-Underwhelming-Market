import AppBar from "@material-ui/core/AppBar";
import {Toolbar} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

// This function creates different classes,
// or groups of styles that we can put on
// any components that we want.
const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2)
    }
}));

const Header = () => {

    // Here we initialize the classes that we are going to use.
    const classes = useStyles();

    return (
        <AppBar position={'static'}>
            <Toolbar>
                <IconButton edge={'start'} color={'inherit'} className={classes.menuButton} aria-label={'menu'}>
                    <MenuRoundedIcon/>
                </IconButton>
                <Typography variant={'h6'}>
                    {'Home'}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;