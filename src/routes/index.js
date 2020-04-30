import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from "../ui/composite/pages/errorpages/404";
import ExchangeRates from "../ui/composite/pages/appollo";

// noinspection JSCheckFunctionSignatures
const AuthPage = lazy(() => import("../ui/composite/pages/authentication"));
// noinspection JSCheckFunctionSignatures
const HomePage = lazy(() => import("../ui/composite/pages/home"));


function AppRoutes() {
    
    return (
        <>
            <Suspense fallback={
                'loading...'
            }>
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path={'/appollo'} component={ExchangeRates}/>
                        <Route path="/auth" component={AuthPage}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </Router>
            </Suspense>
        </>
    );
}

export default AppRoutes;
