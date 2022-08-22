import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CardCountry = ({ country }) => {
  return (
    <Link to={country.name.common.toLowerCase()}>
    <Card style={{ width: "18rem" }}>
      <div class="cardContent">
        <Card.Img variant="top" src={country.flags.svg} />
        <Card.Body>
          <Card.Title>{country.translations.fra.common}</Card.Title>
        </Card.Body>
      </div>
    </Card>
    </Link>
  );
};

export default CardCountry;
