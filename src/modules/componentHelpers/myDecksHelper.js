// import mtg from "mtgsdk";

// const myDecksHelper = () => {
//   let handleCardNameInput = (e, typingTimer, setFetchedCards) => {
//     clearTimeout(typingTimer);
//     let value = e.target.value;

//     if (value) {
//       typingTimer = setTimeout(() => searchName(value, setFetchedCards), 1000);
//     }
//   };

//   let searchName = (text, setFetchedCards) => {
//     mtg.card.where({ name: text, pageSize: 7 }).then(cards => {
//       setFetchedCards(cards);
//       document.querySelector("#fetched-cards").hidden = false;
//     });
//   };

//   return { handleCardNameInput };
// };

// export default myDecksHelper();
