import React from 'react';
import USCurrencyFormat from './USCurrencyFormat.js';

export default function Summary(props) {
  const featureHash = props.feature + '-' + props.idx;

  return (
    <div className="summary__option" key={featureHash}>
      <div className="summary__option__label">{props.feature} </div>
      <div className="summary__option__value">{props.selectedOption.name}</div>
      <div className="summary__option__cost">
        {USCurrencyFormat.format(props.selectedOption.cost)}
      </div>
    </div>
  );
}
