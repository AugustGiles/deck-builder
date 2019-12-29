import {
  SET_ACTIVE_URL,
  SET_ACTIVE_DECK,
  SET_ACTIVE_NOTES,
  SET_ACTIVE_VIEW
} from "../actionTypes";

export const setActiveUrl = url => ({
  type: SET_ACTIVE_URL,
  payload: url
});

export const setActiveDeck = deck => ({
  type: SET_ACTIVE_DECK,
  payload: deck
});

export const setActiveNotes = notes => ({
  type: SET_ACTIVE_NOTES,
  payload: notes
});

export const setActiveView = viewName => ({
  type: SET_ACTIVE_VIEW,
  payload: viewName
});
