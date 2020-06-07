import React from "react";
import styled from "styled-components";
import {backgroundColor, textColor} from "../../../constants/theme/styles";

const AuthTemplate = ({children}) => {
    return <Styling variant={'primary'}>
        {children}
    </Styling>
};

const Styling = styled.div`
width: 100%;
color: ${textColor};
background-color: ${backgroundColor};
padding: 2rem;
height: 100%;
`;

export default AuthTemplate;