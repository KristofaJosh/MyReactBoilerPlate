import theme from 'styled-theming';

export const backgroundColor = theme.variants('mode', 'variant', {
    primary: {day: "white", night: "black"},
});

export const textColor = theme.variants('mode', 'variant', {
    primary: {day: "black", night: "white"},
});