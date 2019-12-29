import {
  SET_ACTIVE_URL,
  SET_ACTIVE_DECK,
  SET_ACTIVE_NOTES,
  SET_ACTIVE_VIEW
} from "../actionTypes";

const initialState = {
  activeUrl: "",
  activeDeck: {},
  activeView: "",
  activeNotes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_URL: {
      return { ...state, activeUrl: action.payload };
    }

    case SET_ACTIVE_DECK: {
      return { ...state, activeDeck: action.payload };
    }

    case SET_ACTIVE_VIEW: {
      return { ...state, activeView: action.payload };
    }

    case SET_ACTIVE_NOTES: {
      return { ...state, activeNotes: action.payload };
    }

    default:
      return state;
  }
}
