import React, {lazy, Suspense, useContext} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ConstantContext, {StyleContext} from "./ui/constants/context";


// noinspection JSCheckFunctionSignatures
const Auth = lazy(() => import("./ui/composite/pages/authentication/index"));

function App() {
    const val = useContext(ConstantContext);
    const changeStyle = useContext(StyleContext);
    
    return (
        <>
            <div>{val.siteColors.black}</div>
            <button onClick={changeStyle.changeMode}>Change Theme Mode</button>
            <div>
                {changeStyle.mode || 'mode'}
            </div>
            
            <Suspense fallback={'loading...'}>
                
                
                <Router>
                    <Switch>
                        <Route path="/" component={Auth}/>
                    </Switch>
                </Router>
            </Suspense>
        </>
    );
}

export default App;
