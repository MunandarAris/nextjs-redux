import { combineReducers } from "redux";
import main from "./main";
import contact from "./contact";

const rootReducer = combineReducers({
  main: main,
  contact: contact,
});

export default rootReducer;
