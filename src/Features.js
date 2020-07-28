import React from 'react';
import Option from './Option.js';

export default function Feature(props) {
  const featureHash = props.feature + '-' + props.idx;
  // console.log(props.options)
  

  return (
    
    <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{props.feature}</h3>
      </legend>
      {props.options.map(item => 
        <Option item={item} feature={props.feature} 
                selectedOption={props.selectedOption}
                onChangeOption={props.onChangeOption}
                selectedName ={props.selectedName} />
      )}
    </fieldset>
    
  );
  
}