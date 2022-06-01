import { ADD_TOKEN, GET_TOKEN, REMOVE_TOKEN } from "../actions";

const auth_reducer = (state, action) => {
  if (action.type === ADD_TOKEN) {
    localStorage.setItem("token", action.payload);
    return { ...state, token: action.payload };
  }
  if (action.type === REMOVE_TOKEN) {
    localStorage.removeItem("token");
    return { ...state, token: "" };
  }

  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default auth_reducer;
