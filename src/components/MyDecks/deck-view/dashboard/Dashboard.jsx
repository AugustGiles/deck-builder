import React from "react";
import { connect } from "react-redux";
import { BarChart, PieChart } from "../../../elements/charts";
import manipulateCardData from "./manipulateCardData";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Dashboard({ deck }) {
  return (
    <div
      className="d-flex mb-5"
      style={{ flexWrap: "wrap", overflow: "scroll" }}
    >
      {Object.keys(deck).length > 0 && (
        <React.Fragment>
          <Col lg="4" className="p-2">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{deck.title}</Card.Title>
                <Card.Subtitle>{deck.format}</Card.Subtitle>
                <hr />
                <Card.Text>{deck.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4" className="p-2">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Cards By CMC</Card.Title>
                <br />
                <BarChart
                  data={manipulateCardData.qtyByCMC(deck.cards["mainboard"])}
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
                <PieChart
                  data={manipulateCardData.qtyByType(deck.cards["mainboard"])}
                  dataKey="qty"
                  nameKey="type"
                />
              </Card.Body>
            </Card>
          </Col>
        </React.Fragment>
      )}
    </div>
  );
}

const mapStateToProps = store => {
  return { deck: store.tracker.activeDeck };
};

export default connect(mapStateToProps)(Dashboard);
