import AppBar from "@material-ui/core/AppBar";
import {Drawer, ListItemIcon, ListItemText, Toolbar} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Typography from "@material-ui/core/Typography";
import React, {Fragment, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
import ExposureRoundedIcon from "@material-ui/icons/ExposureRounded";
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';

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

    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => setDrawerOpen(!drawerOpen);

    const DrawerButton = ({text, icon}) =>
        (
            <ListItem button>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text}/>
            </ListItem>
        );

    const LeftDrawer = () => (
        <div
            role={'presentation'}
            onClick={toggleDrawer}>
            <List>
                <DrawerButton text={'Home'} icon={<AddShoppingCartRoundedIcon/>}/>
                <DrawerButton text={'Upgrades'} icon={<ExposureRoundedIcon/>}/>
                <DrawerButton text={'Inventory'} icon={<LibraryBooksRoundedIcon/>}/>
            </List>
        </div>
    );

    return (
        <Fragment>
            <Drawer open={drawerOpen} onClose={toggleDrawer}>
                <LeftDrawer/>
            </Drawer>
            <AppBar position={'static'}>
                <Toolbar>
                    <IconButton edge={'start'} color={'inherit'} className={classes.menuButton} aria-label={'menu'} onClick={toggleDrawer}>
                        <MenuRoundedIcon/>
                    </IconButton>
                    <Typography variant={'h6'}>
                        {'Home'}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
};

export default Header;