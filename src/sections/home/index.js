import React, {Fragment} from "react";
import BottomNavigationMenu from "../../components/bottom-navigation-menu";
import Header from "../../components/header";

const Home = () => {

    // The component Hierarchy to return.
    return (
        <Fragment>
            <Header/>
            <BottomNavigationMenu/>
        </Fragment>
    )
};

export default Home;