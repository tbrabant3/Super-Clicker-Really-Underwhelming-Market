import React, {Fragment} from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {Toolbar} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import {makeStyles} from "@material-ui/core/styles";
import BottomNavigationMenu from "../../components/bottom-navigation-menu";

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2)
    },
    bottomNavigation: {
        width: '100%',
        position: 'fixed',
        bottom: 0
    }
}));

const Home = () => {

    const classes = useStyles();

    const Header = () => (
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

    return (
        <Fragment>
            <Header/>
            <BottomNavigationMenu/>
        </Fragment>
    )
};

export default Home;