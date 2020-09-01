import React from "react";
import { Link } from "react-router-dom";


export default function Birds(props) {
  return (
    <div>
      {props.}
      {/* {currencies.map((currency) => (
        <h2>
          <Link to={`/price/${currency.currency}`}>{currency.currency}</Link>: 
          {currency.country}
        </h2>
      ))} */}
      <h4>Bird</h4>
    </div>
  );
}
