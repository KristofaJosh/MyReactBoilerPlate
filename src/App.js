import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


// noinspection JSCheckFunctionSignatures
const AuthPage = lazy(() => import("./ui/composite/pages/authentication"));
// noinspection JSCheckFunctionSignatures
const HomePage = lazy(() => import("./ui/composite/pages/home"));




function App() {
    
    return (
        <>
            <Suspense fallback={'loading...'}>
                
                <Router>
                    <Switch>
                        <Route path="/auth" component={AuthPage}/>
                        <Route path="/" component={HomePage}/>
                    </Switch>
                </Router>
            </Suspense>
        </>
    );
}

export default App;
