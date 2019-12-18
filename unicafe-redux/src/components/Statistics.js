import React from 'react';
import Statistic from './Statistic';

const Statistics = ({ store }) => {
  const state = store.getState();
  const good = state.good;
  const neutral = state.ok;
  const bad = state.bad;
  const all = good + neutral + bad;
  if (all === 0) {
    return <p>No feedback given</p>;
  }
  const avg = (1 / all) * (good - bad);
  const pos = (good / all) * 100;
  return (
    <table>
      <tbody>
        <Statistic text="Good" value={good} />
        <Statistic text="Neutral" value={neutral} />
        <Statistic text="Bad" value={bad} />
        <Statistic text="All" value={all} />
        <Statistic text="Average" value={avg} />
        <Statistic text="Positive" value={pos} unit="%" />
      </tbody>
    </table>
  );
};

export default Statistics;
