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
      return { type, qty: compiledObj[type].length };
    });

    return returnArr;
  };

  return { qtyByCMC, qtyByType };
};

export default manipulateCardData();
