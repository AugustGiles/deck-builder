import React, { useState } from "react";
import CompiledBarChart from "../../../../charts/CompiledBarChart";
import CompiledPieChart from "../../../../charts/CompiledPieChart";
import manipulateCardData from "./manipulateCardData";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Dashboard(props) {
  const [data] = useState(props.deck.cards["mainboard"]);

  return (
    <div
      className="d-flex mb-5"
      style={{ flexWrap: "wrap", overflow: "scroll" }}
    >
      <Col lg="4" className="p-2">
        <Card className="h-100">
          <Card.Body>
            <Card.Title>{props.deck.title}</Card.Title>
            <Card.Subtitle>{props.deck.format}</Card.Subtitle>
            <hr />
            <Card.Text>{props.deck.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col lg="4" className="p-2">
        <Card className="h-100">
          <Card.Body>
            <Card.Title>Cards By CMC</Card.Title>
            <br />
            <CompiledBarChart
              data={manipulateCardData.qtyByCMC(data)}
              legend={false}
              height={175}
              width={300}
              xData={"cmc"}
              yData={"qty"}
              color="purple"
            />
          </Card.Body>
        </Card>
      </Col>
      <Col lg="4" className="p-2">
        <Card className="h-100">
          <Card.Body>
            <Card.Title>Cards By Type</Card.Title>
            <br />
            <CompiledPieChart
              data={manipulateCardData.qtyByType(data)}
              dataKey="qty"
              nameKey="type"
            />
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default Dashboard;
