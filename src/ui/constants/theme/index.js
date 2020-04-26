import React, {useState} from "react";
import {StyleProvider} from "../context";
import {ThemeProvider} from 'styled-components';

export default function SiteStylingProvider(props) {
    const [mode, setMode] = useState(getCookie() || 'day');
    
    ((mode) => {
        document.cookie = `mode=${mode}; max-age=3600;`;
    })(mode);
    
    function getCookie() {
        let name = 'mode=';
        let allCookieArray = document.cookie.split(';');
        for (let i = 0; i < allCookieArray.length; i++) {
            let temp = allCookieArray[i].trim();
            if (temp.indexOf(name) === 0)
                return (temp.substring(name.length, temp.length));
        }
    }
    
    const changeMode = () => { mode === 'day' ? setMode('night') : setMode('day')};
    
    return (
        
        <StyleProvider value={{changeMode}}>
            <ThemeProvider theme={{mode}}>
                {props.children}
            </ThemeProvider>
        </StyleProvider>
    )
}