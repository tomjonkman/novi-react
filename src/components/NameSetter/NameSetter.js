import React, { useState, useEffect } from 'react';

// Voorbeeld van een functional component met state
const NameSetter = () => {
  const [naam, setNaam] = useState('-');

  // Dit is het equivalent van componentDidMount
  // Een lege array zegt: ik update slechts 1 keer
  const lifeCycleDidMount = () => {
    console.log("MOUNT");
  }
  useEffect(lifeCycleDidMount, []);

  // Dit is het equivalent van componentDidUpdate
  // [naam] betekent dat zodra naam verandert, de functie lifeCycleDidUpdate wordt aangeroepen.
  const lifeCycleDidUpdate = () => {
    console.log("UPDATE " + naam);
  }
  useEffect(lifeCycleDidUpdate, [naam]);

  // Dit is het equivalent van componentWillUnmount
  // De functie na de return wordt aangeroepen als het component van het scherm wordt gehaald
  const lifeCycleWillUnmount = () => {
    return () => {
      console.log("UNMOUNT");
    }
  }
  useEffect(lifeCycleWillUnmount, []);

  const handleOnchange = (event) => {
    setNaam(event.target.value);
  }

  return <div>
    <input type="text" placeholder="vul hier je naam in" onChange={handleOnchange} />
    <h2>Goedemorgen {naam}</h2>
  </div>;
}

export default NameSetter;
