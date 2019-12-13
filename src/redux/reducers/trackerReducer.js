import { SET_ACTIVE_URL } from "../actionTypes";

const initialState = {
  activeUrl: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_URL: {
      return { ...state, activeUrl: action.payload };
    }

    default:
      return state;
  }
}
