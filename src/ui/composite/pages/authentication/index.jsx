import React from "react";
import AuthTemplate from "../../template/authentication";
import {Link, useRouteMatch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {isAuthenticated} from "../../../../store/actions/isAuthenticated.action";

const AuthPage = () => {
    const isAuth = useSelector(state => state.authenticationReducer);
    
    const dispatch = useDispatch();
    
    let message = useRouteMatch("/auth/private");
    
    
    
    return <>
        <AuthTemplate>
            <Link to={'/'}> Home </Link>
            <hr/>
            {
                message ? 'You tried to access a private page, you must login to view the page' : null
            }
            <br/>
            <p>{`Set *isAuthenticated* to ${!isAuth} in Redux by clicking the ${isAuth? 'Log Out' : 'Login'} button below`}</p>
            <p>{'You will not be able to access this page if you are logged in'}</p>
            <br/>
            <br/>
            <button onClick={()=>dispatch(isAuthenticated())}>{isAuth ? 'Log Out' : 'Login'}</button>
        </AuthTemplate>
    </>
};

export default AuthPage;