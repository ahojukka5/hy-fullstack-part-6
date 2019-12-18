import React from 'react';
import { connect } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import {
  setNotification,
  resetNotification,
} from '../reducers/notificationReducer';

const Anecdote = ({ anecdote, voteAnecdote, setNotification }) => {
  const vote = () => {
    voteAnecdote(anecdote);
    setNotification(`Anecdote "${anecdote.content}" has been voted!`, 5);
  };
  return (
    <div className="anecdote">
      <div>{anecdote.content}</div>
      <div>
        <div>{`has ${anecdote.votes} vote(s)`}</div>
        <button onClick={vote}>vote</button>
      </div>
    </div>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = {
  voteAnecdote,
  setNotification,
  resetNotification,
};

const ConnectedAnecdote = connect(
  mapStateToProps,
  mapDispatchToProps
)(Anecdote);

export default ConnectedAnecdote;
