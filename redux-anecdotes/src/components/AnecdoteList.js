import React from 'react';
import { connect } from 'react-redux';
import Anecdote from './Anecdote';

const filterAnecdotes = ({ anecdotes, filter }) => {
  if (filter) {
    return anecdotes.filter((a) => a.content.includes(filter));
  } else {
    return anecdotes;
  }
};

const AnecdoteList = ({ anecdotes, filter }) => {
  const list = anecdotes
    .sort((a, b) => b.votes - a.votes)
    .map((anecdote) => <Anecdote key={anecdote.id} anecdote={anecdote} />);
  return <div>{list}</div>;
};

const mapStateToProps = (state) => {
  return {
    anecdotes: filterAnecdotes(state),
    filter: state.filter,
  };
};

const mapDispatchToProps = {};

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList);
export default ConnectedAnecdoteList;
