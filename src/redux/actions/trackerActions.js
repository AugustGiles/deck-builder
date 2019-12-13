import { SET_ACTIVE_URL } from "../actionTypes";

export const setActiveUrl = url => ({
  type: SET_ACTIVE_URL,
  payload: url
});
