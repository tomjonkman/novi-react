import React, { useState, useEffect } from 'react';

const RandomDogFunctionComponent = () => {

  // We definieren randomDog als state van dit component
  const [randomDog, setRandomDog] = useState('');
  // We maken een useEffect hook en definieren daarin een functie die eenmaal wordt aangeroepen (componentDidMount)
  useEffect(() => {
    // In deze functie zelf definieren we een async functie die we vervolgens aanroepen.
    async function fetchData() {
      let response = await fetch('https://random.dog/woof.json');
      const dog = await response.json();
      // We gebruiken de response van de api call hierboven om de state van het component te updaten.
      setRandomDog(dog.url);
    }
    fetchData();
  }, []);

  // Hier gebruiken we randomDog (uit de useState hook) voor het renderen van de UI.
  const extension = randomDog.substr(-3);
  let dog = null;
  if (extension === "jpg") {
    dog = (<img src={randomDog} width="320" height="240" />);
  } else if (extension === "mp4") {
    dog = (<video src={randomDog} controls width="320" height="240" />)
  }

  return <div>
    <h1>API Call - Random dog (function component)</h1>
    <div>{dog}</div>
  </div>;
}

export default RandomDogFunctionComponent;
