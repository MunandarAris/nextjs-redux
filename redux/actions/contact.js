import { SET_CONTACT } from "../types";

export const setContact = (name, no_tlp, address, email) => (dispatch) => {
  dispatch({
    type: SET_CONTACT,
    payload: name,
    no_tlp,
    address,
    email,
  });
};
