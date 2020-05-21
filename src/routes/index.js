import React, {lazy, Suspense} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import ExchangeRates from "../ui/composite/pages/appollo";
import NotFound from "../ui/composite/pages/errorpages/404";

// noinspection JSCheckFunctionSignatures
const AuthPage = lazy(() => import("../ui/composite/pages/authentication"));
// noinspection JSCheckFunctionSignatures
const HomePage = lazy(() => import("../ui/composite/pages/home"));

function AppRoutes() {

  return (
      <><Suspense fallback = {'loading...'}><BrowserRouter><Switch><
          Route exact path = "/" component =
      { HomePage } />
                        <Route path={'/apollo'} component={ExchangeRates}/> <
          Route path = "/auth" component =
          {
            AuthPage
          } />
                        <Route path="*" component={NotFound}/>
      </Switch>
                </BrowserRouter></Suspense>
        </>);
}

export default AppRoutes;
