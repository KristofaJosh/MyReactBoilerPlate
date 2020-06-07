import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from "../ui/composite/pages/errorpages/404";
import {PrivateRoute, PublicRoute} from "./router_helpers/router";
import PrivatePage from "../ui/composite/pages/private";
import {useSelector} from "react-redux";

// noinspection JSCheckFunctionSignatures
const AuthPage = lazy(() => import("../ui/composite/pages/authentication"));
// noinspection JSCheckFunctionSignatures
const HomePage = lazy(() => import("../ui/composite/pages/home"));



function AppRoutes() {
    const isAuthenticated = useSelector(state => state.authenticationReducer);
    
    return (
        <>
            <Suspense fallback={'loading...'}>
                
                <Router>
                    <Switch>
                        <PrivateRoute path="/private" component={PrivatePage} authenticated={isAuthenticated} notAuth={'/auth/private'}/>
                        <PublicRoute path="/auth" component={AuthPage} authenticated={isAuthenticated} onAuth={'/'}/>
                        <Route exact path="/" component={HomePage} />
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </Router>
            </Suspense>
        </>
    );
}

export default AppRoutes;