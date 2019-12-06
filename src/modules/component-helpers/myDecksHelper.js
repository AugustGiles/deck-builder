import mtg from "mtgsdk";

const myDecksHelper = (
  typingTimer,
  setCardVersions,
  setDropdownHidden,
  setCardName,
  setFetchedCardNames,
  setPrinting
) => {
  let handleCardNameInput = e => {
    clearTimeout(typingTimer);
    let inputName = e.target.value;

    if (inputName) {
      typingTimer = setTimeout(() => searchName(inputName), 1000);
    }
  };

  let searchName = text => {
    mtg.card.where({ name: text, pageSize: 200 }).then(cards => {
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

  return { handleCardNameInput, handleFetchedCardSelection };
};

export default myDecksHelper;
