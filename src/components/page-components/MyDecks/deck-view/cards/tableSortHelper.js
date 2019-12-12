const tableSortHelper = () => {
  const sortByAttribute = (attribute, deck, deckViewPage) => {
    switch (attribute) {
      case "qty":
        return sortByQty(deck, deckViewPage);
      case "name":
        return sortByName(deck, deckViewPage);
      case "type_line":
        return sortByTypeLine(deck, deckViewPage);
      case "set_name":
        return sortBySetName(deck, deckViewPage);
      case "condition":
        return sortByCondition(deck, deckViewPage);
      case "cmc":
        return sortByCmc(deck, deckViewPage);
      default:
        return deck;
    }
  };

  const sortByQty = (deck, deckViewPage) => {
    return [...deck.cards[deckViewPage]].sort((a, b) => {
      return a.qty - b.qty;
    });
  };

  const sortByName = (deck, deckViewPage) => {
    return [...deck.cards[deckViewPage]].sort((a, b) => {
      if (a.card.name < b.card.name) {
        return -1;
      } else if (a.card.name > b.card.name) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  const sortBySetName = (deck, deckViewPage) => {
    return [...deck.cards[deckViewPage]].sort((a, b) => {
      if (a.card.set_name < b.card.set_name) {
        return -1;
      } else if (a.card.set_name > b.card.set_name) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  const sortByTypeLine = (deck, deckViewPage) => {
    return [...deck.cards[deckViewPage]].sort((a, b) => {
      if (a.card.type_line < b.card.type_line) {
        return -1;
      } else if (a.card.type_line > b.card.type_line) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  const sortByCondition = (deck, deckViewPage) => {
    return [...deck.cards[deckViewPage]].sort((a, b) => {
      if (a.condition < b.condition) {
        return -1;
      } else if (a.condition > b.condition) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  const sortByCmc = (deck, deckViewPage) => {
    return [...deck.cards[deckViewPage]].sort((a, b) => {
      return a.card.cmc - b.card.cmc;
    });
  };

  return { sortByAttribute };
};

export default tableSortHelper();
