import React, {useContext} from "react";
import MainTemplate from "../../template/main";
import ConstantContext, {StyleContext} from "../../../constants/context";

const HomePage = () => {
    const val = useContext(ConstantContext);
    const changeStyle = useContext(StyleContext);
    
    const black = val.siteColors.black;
    const brown = val.siteColors.brown;
    
    return <>
        <MainTemplate variant={'primary'}>
            <h1>Welcome</h1>
            <div style={{color: black}}> Constant variables </div>
            <button style={{backgroundColor: brown}} onClick={changeStyle.changeMode}>Change Theme Mode</button>
        </MainTemplate>
    </>
};

export default HomePage;