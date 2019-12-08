const scryfallApi = () => {
  let getCardsByName = async cardName => {
    let url = new URL("https://api.scryfall.com/cards/search?");
    url.search = new URLSearchParams({ q: cardName }).toString();
    const resp = await fetch(url);

    if (resp.status === 200) {
      const body = await resp.json();
      return body.data;
    } else {
      return null;
    }
  };

  let getCardVersions = async uri => {
    const resp = await fetch(uri);
    if (resp.status === 200) {
      const body = await resp.json();
      return body.data;
    } else {
      return null;
    }
  };

  return { getCardsByName, getCardVersions };
};

export default scryfallApi();
