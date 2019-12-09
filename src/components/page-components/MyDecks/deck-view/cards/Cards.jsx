import React, { useState } from "react";
import CardList from "./CardList";
import FilterSort from "./FilterSort";
import cardSortHelper from "./cardSortHelper";
import { FixedRight } from "../../../../layout-elements/";

function Cards(props) {
  let [boardView, setBoardView] = useState("mainboard");
  let [sort, setSort] = useState("type_line");

  return (
    <React.Fragment>
      {Object.keys(props.deck).length !== 0 && (
        <CardList
          cards={cardSortHelper.sortByAttribute(
            sort,
            props.deck.cards[boardView]
          )}
          classList="d-inline-block w-75"
        />
      )}
      <FixedRight>
        <FilterSort
          boardView={boardView}
          setBoardView={setBoardView}
          sort={sort}
          setSort={setSort}
        />
      </FixedRight>
    </React.Fragment>
  );
}

export default Cards;
