import React from 'react';
import NameSetter from '../NameSetter/NameSetter';

const TestFunctionalComponent = () => (<div>
  <h1>Test functional component met state</h1>
  <p>De state van dit component wordt geupdate wanneer het tekstveld wordt aangepast.</p>
  {/* We hebben hier een deel van de code 'ge-refactored', opgesplits naar een eigen (reusable) component */}
  {/* Het is belangrijk in de gaten te houden dat je een component zo min mogelijk wil laten doen (Single Responsibility) */}
  {/* en dat je jezelf niet wil herhalen (Don't Repeat Yourself) */}
  <NameSetter />
</div>);

export default TestFunctionalComponent;
