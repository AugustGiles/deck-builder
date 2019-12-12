import cardSortHelper from "../cards/cardSortHelper";

const manipulateCardData = () => {
  const qtyByCMC = cards => {
    let compiledObj = cardSortHelper.sortByAttribute("cmc", cards);

    let returnArr = Object.keys(compiledObj).map(cmc => {
      return { cmc, qty: compiledObj[cmc].length };
    });

    return returnArr;
  };

  const qtyByType = cards => {
    let compiledObj = cardSortHelper.sortByAttribute("type_line", cards);

    let returnArr = Object.keys(compiledObj).map(type => {
      let qty = compiledObj[type].reduce(
        (acc, curr) => acc + parseInt(curr.qty),
        0
      );
      return { type, qty };
    });

    return returnArr;
  };

  return { qtyByCMC, qtyByType };
};

export default manipulateCardData();
