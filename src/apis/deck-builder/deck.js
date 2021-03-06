const deckServiceModule = () => {
  const baseUrl = "http://localhost:3001";

  let addNewDeck = async deck => {
    let res = await fetch(`${baseUrl}/decks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(deck)
    });

    let data = await res.json();
    return data;
  };

  let editDeck = async (deck, id) => {
    let res = await fetch(`${baseUrl}/decks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(deck)
    });

    let data = await res.json();
    return data;
  };

  let getAllDecks = async () => {
    let res = await fetch(`${baseUrl}/decks`);
    let data = await res.json();
    return data;
  };

  let getDeckById = async id => {
    let res = await fetch(`${baseUrl}/decks/${id}`);
    let data = await res.json();
    return data;
  };

  let deleteDeckById = async id => {
    let res = await fetch(`${baseUrl}/decks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    let data = await res.json();
    return data;
  };

  return { addNewDeck, editDeck, getAllDecks, getDeckById, deleteDeckById };
};

export default deckServiceModule();
