export const getUserDeckById = (store, id) => {
  if (store.user.decks.length === 0) {
    return {};
  } else {
    return store.user.decks.find(deck => parseInt(id) === parseInt(deck.id));
  }
};
