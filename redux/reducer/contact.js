// import types
import { SET_CONTACT } from "../types";

const initialStateContact = { name: "", no_tlp: "", address: "", email: "" };

const contact = (state = { ...initialStateContact }, action) => {
  switch (action.type) {
    case SET_CONTACT:
      return {
        ...state,
        name: action.payload.name,
        no_tlp: action.payload.no_tlp,
        address: action.payload.address,
        email: action.payload.email,
      };
    default:
      return {
        ...state,
      };
  }
};

export default contact;
