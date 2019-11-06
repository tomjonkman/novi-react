import React from 'react';
import './RootState.css';

// Dit component is een voorbeeld om te laten zien hoe een actie op het ene component
// een ander component kan beinvloeden.

export default class RootState extends React.Component {
  // Het RootState component bevat de state
  state = {
    backgroundColor: "blue"
  }

  // En een functie om de state aan te passen.
  // Let op: Dit is een arrow function.
  // Dit zorgt ervoor dat 'this' altijd zal wijzen naar de instantie van deze klasse.
  setBackgroundColor = () => {
    const newBackgroundColor = (this.state.backgroundColor === "blue") ? "red" : "blue"
    this.setState(
      {
        backgroundColor: newBackgroundColor
      }
    )
  }

  // In de render functie krijgt Component A de functie setBackgroundColor als prop.
  // Component B krijgt de backgroundColor uit de state als prop.
  render() {
    console.log(this.state)
    return (
      <div>
        <ComponentA setBackgroundColor={this.setBackgroundColor} />
        <ComponentB backgroundColor={this.state.backgroundColor} />
      </div>
    );
  }
}

// Als de knop in Component A wordt aangeklikt...
const ComponentA = props => (
  <div>
    <input type="button" value="Klik hier" onClick={props.setBackgroundColor} />
  </div>
)

// ...verandert in Component B de achtergrondkleur
const ComponentB = props => {
  const dynamicClassName = "ComponentB__container--" + props.backgroundColor;
  return (
    <div className={dynamicClassName}>Check de achtergrond kleur van deze div!</div>
  )
}
