const cardSortHelper = () => {
  const sortByAttribute = (attribute, cards) => {
    switch (attribute) {
      case "type_line":
        return sortByType(cards);
      case "cmc":
        return sortByCmc(cards);
      case "rarity":
        return sortByRarity(cards);
      case "price":
        return sortByPrice(cards);
      default:
        return cards;
    }
  };

  const sortByType = cards => {
    let returnObj = {};
    cards.forEach(selection => {
      let typeLine = selection.card.type_line;
      let types = [
        "Creature",
        "Instant",
        "Sorcery",
        "Artifact",
        "Enchantment",
        "Planeswalker",
        "Land"
      ];

      types.forEach(type => {
        if (typeLine.includes(type)) {
          returnObj[type]
            ? returnObj[type].push(selection)
            : (returnObj[type] = [selection]);
        }
      });
    });

    return returnObj;
  };

  const sortByCmc = cards => {
    let returnObj = {};
    cards.forEach(selection => {
      if (!selection.card.type_line.includes("Land")) {
        let cmc = selection.card["cmc"];
        returnObj[cmc]
          ? returnObj[cmc].push(selection)
          : (returnObj[cmc] = [selection]);
      }
    });
    return returnObj;
  };

  const sortByRarity = cards => {
    let returnObj = {};
    cards.forEach(selection => {
      let rarity = selection.card.rarity;
      const rarityCapitalized =
        rarity.charAt(0).toUpperCase() + rarity.slice(1);
      returnObj[rarityCapitalized]
        ? returnObj[rarityCapitalized].push(selection)
        : (returnObj[rarityCapitalized] = [selection]);
    });
    return returnObj;
  };

  const sortByPrice = cards => {
    let returnObj = {};
    returnObj["PriceUSD"] = cards.sort((a, b) => {
      return a.card.prices["usd"] - b.card.prices["usd"];
    });
    return returnObj;
  };

  return { sortByAttribute };
};

export default cardSortHelper();
