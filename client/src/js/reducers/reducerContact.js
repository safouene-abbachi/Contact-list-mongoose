import { GET_CONTACTS } from "../constants/actionsTypes";

const initialState = {
  contacts: [],
};

export const reducerContact = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return { contacts: action.payload };

    default:
      return state;
  }
};
