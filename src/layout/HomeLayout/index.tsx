import React, {useContext} from 'react';
import Loading from "../../components/layout/Loading";
import {LayoutContext} from "../../contexts/LayoutContext";
import Header from "../Header";
import Banner from "../Banner";
import {Route, Switch, Redirect} from "react-router-dom";
import HomePage from "../../pages/HomePage";
import {ABOUT_PAGE, BLOG_PAGE, CONTACT_PAGE, HOME_PAGE, PROPERTIES_PAGE} from "../../actions/contants";
import Footer from "../Footer";

function HomeLayout() {
    const {isLoading} = useContext(LayoutContext);
    return (
        <div className='home-layout'>
            <Loading isLoading = {isLoading}/>
            <Header/>
            <Banner/>
            <Switch>
                <Route path="/" exact>
                    <Redirect to={HOME_PAGE} />
                </Route>
                <Route path={HOME_PAGE} exact component={HomePage}/>
                <Route path={CONTACT_PAGE} exact component={HomePage}/>
                <Route path={ABOUT_PAGE} exact component={HomePage}/>
                <Route path={PROPERTIES_PAGE} exact component={HomePage}/>
                <Route path={BLOG_PAGE} exact component={HomePage}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default HomeLayout;
