import React, { Component } from 'react';
import Features from "./Features.js";
import Cart from "./Cart.js";

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
// import slugify from 'slugify';

import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values


export default class App extends Component {

  
  constructor(props) {
    super(props);

    const selected = {};
    for (const featureName in this.props.features) {
      selected[featureName] = this.props.features[featureName][0]
    }

    this.state = { selected };
  }
  

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    
    
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {Object.keys(this.props.features).map((feature, idx) =>
              <Features feature={feature} idx={idx}
                       options={this.props.features[feature]}
                       selectedOption={this.state.selected[feature].name}
                       onChangeOption={this.updateFeature}
                       selectedName={this.state.selected[feature].name} />
            )}
          </form>
          <Cart 
          
            selected={this.state.selected}
          />
        </main>
      </div>
    );
  }
}
