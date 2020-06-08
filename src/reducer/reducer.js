const themeReducer = (state = "light", action) => {
  if (action.type === "TOGGLE_DARKTHEME") {
    return state === "light" ? "dark" : "light";
  }
  return state;
};

export default themeReducer;
