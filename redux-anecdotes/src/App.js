import React, { useEffect } from 'react';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import { connect } from 'react-redux';
import Notification from './components/Notification';
import { resetNotification } from './reducers/notificationReducer';
import Filter from './components/Filter';
import { initializeAnecdotes } from './reducers/anecdoteReducer';

const App = ({ resetNotification, initializeAnecdotes }) => {
  useEffect(() => {
    initializeAnecdotes();
  }, [initializeAnecdotes]);
  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <h2>Create new anecdote</h2>
      <AnecdoteForm />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  resetNotification,
  initializeAnecdotes,
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default ConnectedApp;
