import React from "react";
import {Route, Redirect} from "react-router-dom";
import PropTypes from 'prop-types';

export const PrivateRoute = ({component: Component, authenticated, notAuth, ...routerProps}) => {
    return(
        <Route {...routerProps}
               render={(props) => authenticated === true ?
                   <Component {...props} />
                   :
                   <Redirect to={{ pathname: notAuth, state: { from: props.location } }}/>}/>
    )
};

export const PublicRoute = ({component: Component, authenticated, onAuth, ...routerProps}) => {
    return (
        <Route {...routerProps}
            render={(props) => authenticated === false ?
                <Component {...props} />
                :
                <Redirect to={onAuth} />}
        />
    )
};

PrivateRoute.propTypes = {
    Component: PropTypes.element,
    authenticated:PropTypes.any,
    onAuth: PropTypes.string,
};