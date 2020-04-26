import theme from 'styled-theming';

export const backgroundColor = theme ('mode', {
    day: "white",
    night: "black",
});

export const textColor = theme ('mode', {
    day: "black",
    night: "white",
});