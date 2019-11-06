import React from 'react';
import './TestClassComponent.css';

// Voorbeeld van een class-based component met state
export default class TestClassComponent extends React.Component {
  state = {
    naam: "-",
    counter: 0
  }

  handleOnchange = (event) => {
    const inputValue = event.target.value;
    this.setState({ naam: inputValue });
  }

  render() {
    // Hier gebruiken we de state om te bepalen welke CSS class we willen gebruiken.
    const classToUse = (this.state.naam === "-") ? "test-class-component--not-filled" : "test-class-component--filled";

    return (<div className={classToUse}>
      <h1>Test class component met state</h1>
      <input type="text" placeholder="vul hier je naam in" onChange={this.handleOnchange} />
      <h2>Goedemorgen {this.state.naam}</h2>
    </div>);
  }
}
