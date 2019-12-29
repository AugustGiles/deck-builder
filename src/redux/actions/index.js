import {
  setActiveUrl,
  setActiveDeck,
  setActiveNotes,
  setActiveView
} from "./trackerActions";
import { addDeck, setUser } from "./userActions";

export default {
  trackerActions: {
    setActiveUrl,
    setActiveDeck,
    setActiveNotes,
    setActiveView
  },
  userActions: {
    addDeck,
    setUser
  }
};
