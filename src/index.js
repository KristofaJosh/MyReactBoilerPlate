import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ErrorBoundary from "./containers/errors/errorboundary";
import variables from "./ui/constants/variables";
import {ConstantProvider} from "./ui/constants/context";
import SiteStylingProvider from "./ui/constants/theme";


ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary>
            <ConstantProvider value={variables}>
                <SiteStylingProvider>
                    <App/>
                </SiteStylingProvider>
            </ConstantProvider>
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
