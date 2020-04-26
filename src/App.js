import React, {useContext} from 'react';
import ConstantContext, {StyleContext} from "./ui/constants/context";

function App() {
    const val = useContext(ConstantContext);
    const changeStyle = useContext(StyleContext);
    
    return (
        <>
            <div>{val.siteColors.black}</div>
            <button onClick={changeStyle.changeMode}>Change Mode</button>
        </>
    );
}

export default App;
