import React from "react";
import AuthTemplate from "../../template/authentication";
import {Link} from "react-router-dom";

const AuthPage = () => {
    return <>
        <AuthTemplate>
            <p>Auth Page</p>
            <Link to={'/'}> Goto Home Page </Link>
        </AuthTemplate>
    </>
};

export default AuthPage;