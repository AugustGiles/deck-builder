const manipulateCardData = () => {
  const qtyByCMC = cards => {
    let compiledObj = {};
    cards.forEach(selection => {
      if (!selection.card.type_line.includes("Land")) {
        let cmc = selection.card["cmc"];
        compiledObj[cmc]
          ? compiledObj[cmc].push(selection)
          : (compiledObj[cmc] = [selection]);
      }
    });

    let returnArr = Object.keys(compiledObj).map(cmc => {
      return { cmc, qty: compiledObj[cmc].length };
    });

    return returnArr;
  };

  return { qtyByCMC };
};

export default manipulateCardData();
