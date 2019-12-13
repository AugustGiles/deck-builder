import { ADD_DECK, SET_USER } from "../actionTypes";

export const addDeck = content => ({
  type: ADD_DECK,
  payload: content
});

export const setUser = content => ({
  type: SET_USER,
  payload: content
});
