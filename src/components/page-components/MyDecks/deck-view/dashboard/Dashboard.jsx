import React, { useState } from "react";
import Bar from "./Bar";
import manipulateCardData from "./manipulateCardData";
import Card from "react-bootstrap/Card";

function Dashboard(props) {
  const [data] = useState(props.deck.cards["mainboard"]);

  return (
    <div className="d-flex" style={{ flexWrap: "wrap" }}>
      <Card className="w-25 m-2">
        <Card.Body>
          <Card.Title>{props.deck.title}</Card.Title>
          <Card.Subtitle>{props.deck.format}</Card.Subtitle>
          <hr />
          <Card.Text>{props.deck.description}</Card.Text>
        </Card.Body>
      </Card>
      <Card className="m-2">
        <Card.Body>
          <Card.Title>Cards By CMC</Card.Title>
          <hr />
          <Bar
            data={manipulateCardData.qtyByCMC(data)}
            width={300}
            height={200}
            top={20}
            bottom={30}
            left={30}
            right={0}
            xData={"cmc"}
            yData={"qty"}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default Dashboard;
