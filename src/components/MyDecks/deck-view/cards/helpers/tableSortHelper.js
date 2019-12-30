const tableSortHelper = () => {
  const sortByAttribute = (attribute, deck, activeView) => {
    switch (attribute) {
      case "qty":
        return sortByQty(deck, activeView);
      case "name":
        return sortByName(deck, activeView);
      case "type_line":
        return sortByTypeLine(deck, activeView);
      case "set_name":
        return sortBySetName(deck, activeView);
      case "condition":
        return sortByCondition(deck, activeView);
      case "cmc":
        return sortByCmc(deck, activeView);
      default:
        return deck;
    }
  };

  const sortByQty = (deck, activeView) => {
    return [...deck.cards[activeView]].sort((a, b) => {
      return a.qty - b.qty;
    });
  };

  const sortByName = (deck, activeView) => {
    return [...deck.cards[activeView]].sort((a, b) => {
      if (a.card.name < b.card.name) {
        return -1;
      } else if (a.card.name > b.card.name) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  const sortBySetName = (deck, activeView) => {
    return [...deck.cards[activeView]].sort((a, b) => {
      if (a.card.set_name < b.card.set_name) {
        return -1;
      } else if (a.card.set_name > b.card.set_name) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  const sortByTypeLine = (deck, activeView) => {
    return [...deck.cards[activeView]].sort((a, b) => {
      if (a.card.type_line < b.card.type_line) {
        return -1;
      } else if (a.card.type_line > b.card.type_line) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  const sortByCondition = (deck, activeView) => {
    return [...deck.cards[activeView]].sort((a, b) => {
      if (a.condition < b.condition) {
        return -1;
      } else if (a.condition > b.condition) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  const sortByCmc = (deck, activeView) => {
    return [...deck.cards[activeView]].sort((a, b) => {
      return a.card.cmc - b.card.cmc;
    });
  };

  return { sortByAttribute };
};

export default tableSortHelper();
