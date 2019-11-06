import React from 'react';

export default class RandomDogClassComponent extends React.Component {
  state = {
    randomDog: ''
  }

  // Wordt aangeroepen als het component de eerste keer is gerenderd.
  componentDidMount() {
    this.getDogs();
  }

  async getDogs() {
    let response = await fetch('https://random.dog/woof.json');
    const randomDog = await response.json();
    this.setState({
      randomDog: randomDog.url
    });
  }

  // Wordt aangeroepen als props of state verandert
  componentDidUpdate(prevProps, prevState) {
    console.log("componentUpdate", prevProps, prevState);
  }

  // Wordt aangeroepen als het component van het scherm wordt gehaald.
  componentWillUnmount() {
  }

  render() {
    const extension = this.state.randomDog.substr(-3);
    let dog = null;
    if (extension === "jpg") {
      dog = (<img src={this.state.randomDog} width="320" height="240" />);
    } else if (extension === "mp4") {
      dog = (<video src={this.state.randomDog} controls width="320" height="240" />)
    }

    return (
      <div>
        <h1>API Call - Random dog (class component)</h1>
        <div>{dog}</div>
      </div>
    );
  }
}
