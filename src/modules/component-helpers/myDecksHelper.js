const myDecksHelper = (
  setCardVersions,
  setDropdownHidden,
  setCardName,
  setFetchedCards,
  setPrinting,
  cardName
) => {
  let searchName = async () => {
    let url = new URL("https://api.scryfall.com/cards/search?");
    url.search = new URLSearchParams({ q: cardName }).toString();
    const resp = await fetch(url);

    if (resp.status === 200) {
      const body = await resp.json();
      setFetchedCards(body.data);
      setDropdownHidden(false);
    }
  };

  let handleFetchedCardSelection = async (e, card) => {
    e.preventDefault();
    setCardName(card.name);
    setDropdownHidden(true);

    const resp = await fetch(card.prints_search_uri);

    if (resp.status === 200) {
      const body = await resp.json();
      const cardVersions = body.data;
      setCardVersions(cardVersions);
      setPrinting(cardVersions[0].set_name);
    }
  };

  return { searchName, handleFetchedCardSelection };
};

export default myDecksHelper;
