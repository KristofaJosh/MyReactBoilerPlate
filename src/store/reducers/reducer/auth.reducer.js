export const authenticationReducer = (state = false, action) => {
  if (action.type === "AUTHENTICATE") {
    return !state;
  } else {
    return state;
  }
};
