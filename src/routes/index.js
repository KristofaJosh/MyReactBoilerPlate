import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from "../ui/composite/pages/errorpages/404";

// noinspection JSCheckFunctionSignatures
const AuthPage = lazy(() => import("../ui/composite/pages/authentication"));
// noinspection JSCheckFunctionSignatures
const HomePage = lazy(() => import("../ui/composite/pages/home"));



function AppRoutes() {
    
    return (
        <>
            <Suspense fallback={'loading...'}>
                
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/auth" component={AuthPage}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </Router>
            </Suspense>
        </>
    );
}

export default AppRoutes;
