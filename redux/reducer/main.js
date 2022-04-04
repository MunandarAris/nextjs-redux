// import types
import { SET_NAME } from "../types";

const main = (state = { name: "" }, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default main;
