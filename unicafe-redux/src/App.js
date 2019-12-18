import React from 'react';
import Button from './components/Button';
import Statistics from './components/Statistics';

const App = ({ store }) => {
  const onGood = () => store.dispatch({ type: 'GOOD' });
  const onNeutral = () => store.dispatch({ type: 'OK' });
  const onBad = () => store.dispatch({ type: 'BAD' });
  const onReset = () => store.dispatch({ type: 'ZERO' });

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="Good" onClick={onGood} />
      <Button text="Neutral" onClick={onNeutral} />
      <Button text="Bad" onClick={onBad} />
      <Button text="Reset" onClick={onReset} />
      <h1>Statistics</h1>
      <Statistics store={store} />
    </div>
  );
};

export default App;
