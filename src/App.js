import React from 'react';
import './App.css';
import TestClassComponent from './components/TestClassComponent/TestClassComponent';
import TestFunctionalComponent from './components/TestFunctionalComponent/TestFunctionalComponent';
import NameSetter from './components/NameSetter/NameSetter';
import RandomDogClassComponent from './components/RandomDogClassComponent/RandomDogClassComponent';
import RandomDogFunctionComponent from './components/RandomDogFunctionComponent/RandomDogFunctionComponent';
import RootState from './components/RootState/RootState';
const App = () => {
  return (
    <div className="App">
      <RandomDogClassComponent />
      <hr />
      <RandomDogFunctionComponent />
      <hr />
      <RootState />
      <hr />
      <TestFunctionalComponent />
      <hr />
      <TestClassComponent />
      <hr />
      {/* We kunnen het reusable component NameSetter overal gebruiken, dus ook hier! */}
      <NameSetter />
    </div>
  )
}

export default App;
