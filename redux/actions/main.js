import { SET_NAME } from "../types";

export const setInfo = (name) => (dispatch) => {
  dispatch({
    type: SET_NAME,
    payload: name,
  });
};
