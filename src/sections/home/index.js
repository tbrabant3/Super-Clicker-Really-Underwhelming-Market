import React, {Fragment, useState} from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {Toolbar} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import {makeStyles} from "@material-ui/core/styles";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ExposureRoundedIcon from '@material-ui/icons/ExposureRounded';
import BottomNavigation from "@material-ui/core/BottomNavigation";

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

    const [currentBottomNavigation, setCurrentBottomNavigation] = useState('Home');

    const handleBottomNavigationChange = (event, newBottomNavigation) => {
        setCurrentBottomNavigation(newBottomNavigation);
    };

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

    const BottomNavigationMenu = () => (
        <BottomNavigation value={currentBottomNavigation}
                          onChange={handleBottomNavigationChange}
                          className={classes.bottomNavigation}
                          showLabels>
            <BottomNavigationAction label={'Home'} value={'Home'} icon={<AddShoppingCartRoundedIcon/>} />
            <BottomNavigationAction label={'Upgrades'} value={'Upgrades'} icon={<ExposureRoundedIcon/>} />
        </BottomNavigation>
    );

    return (
        <Fragment>
            <Header/>
            <Typography variant={'h4'}>
                {'This is a test component.'}
            </Typography>
            <BottomNavigationMenu/>
        </Fragment>
    )
};

export default Home;