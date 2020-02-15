import React, {Fragment} from "react";
import BottomNavigationMenu from "../../components/bottom-navigation-menu";
import Header from "../../components/header";
import Typography from "@material-ui/core/Typography";
import PageLayout from "../../components/page-layout";

const Home = () => {

    const ExampleComponent = () => (
        <Typography variant={'h4'}>
            {'This is an example component; Replace this with anything to see it in the main section!'}
        </Typography>
    );

    // The component Hierarchy to return.
    return (
        <Fragment>
            <Header/>
            <PageLayout>
                <ExampleComponent/>
            </PageLayout>
            <BottomNavigationMenu/>
        </Fragment>
    )
};

export default Home;