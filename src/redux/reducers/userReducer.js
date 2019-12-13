import { ADD_DECK, SET_USER } from "../actionTypes";

const initialState = {
  id: null,
  username: "",
  decks: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      let { decks } = action.payload;
      return { ...state, decks };
    }

    case ADD_DECK: {
      return { ...state, decks: [...state.decks, action.payload] };
    }

    default:
      return state;
  }
}
