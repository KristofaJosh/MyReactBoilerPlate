import React from "react";
import AuthTemplate from "../../template/authentication";
import {Link} from "react-router-dom";

const AuthPage = () => {
    return <>
        <AuthTemplate>
            <p>Login or SignUp</p>
            <Link to={'/'}> Home </Link>
        </AuthTemplate>
    </>
};

export default AuthPage;