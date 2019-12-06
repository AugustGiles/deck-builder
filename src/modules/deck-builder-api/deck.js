const deckServiceModule = () => {
  let addNewDeck = async deck => {
    let res = await fetch("http://localhost:3001/decks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(deck)
    });

    let data = await res.json();
    return data;
  };

  let getAllDecks = async () => {
    let res = await fetch("http://localhost:3001/decks");
    let data = await res.json();
    return data;
  };

  let getDeck = async id => {
    let res = await fetch(`http://localhost:3001/decks/${id}`);
    let data = await res.json();
    return data;
  };

  return { addNewDeck, getAllDecks, getDeck };
};

export default deckServiceModule();
