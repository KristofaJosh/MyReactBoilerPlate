import {createContext} from "react";

const ConstantContext = createContext(true);
export const ConstantProvider = ConstantContext.Provider;
export const ConstantConsumer = ConstantContext.Consumer;

export const StyleContext = createContext({mode: 'day'});
export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;

export default ConstantContext