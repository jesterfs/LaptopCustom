import React from 'react';
import USCurrencyFormat from './USCurrencyFormat.js';
import Summary from "./Summary.js";

export default function Cart(props) {
  
  const total = Object.keys(props.selected).reduce(
      (acc, curr) => acc + props.selected[curr].cost,
      0
    );
  
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {Object.keys(props.selected).map((feature, idx) => 

      <Summary
        selectedOption = {props.selected[feature]}
        

        />
      )}
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(total)}
        </div>
      </div>
    </section>
  )
} 
