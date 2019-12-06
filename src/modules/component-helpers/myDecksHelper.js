import mtg from "mtgsdk";

const myDecksHelper = (
  setCardVersions,
  setDropdownHidden,
  setCardName,
  setFetchedCardNames,
  setPrinting,
  cardName
) => {
  let searchName = () => {
    mtg.card.where({ name: cardName, pageSize: 100 }).then(cards => {
      const distinctCards = [...new Set(cards.map(card => card.name))];
      const renderedNames = [...distinctCards.slice(0, 5)];
      setFetchedCardNames(renderedNames);
      setDropdownHidden(false);
    });
  };

  let handleFetchedCardSelection = (e, name) => {
    e.preventDefault();
    setCardName(name);
    setDropdownHidden(true);
    mtg.card.where({ name }).then(cards => {
      setCardVersions(cards);
      setPrinting(cards[0].set);
    });
  };

  return { searchName, handleFetchedCardSelection };
};

export default myDecksHelper;
