import React from 'react';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { connect } from 'react-redux';
import {
  setNotification,
  resetNotification,
} from '../reducers/notificationReducer';

const AnecdoteForm = ({
  createAnecdote,
  setNotification,
  resetNotification,
}) => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    createAnecdote(content);
    setNotification(`Anecdote "${content}" has been created!`);
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input name="anecdote" />
      </div>
      <button type="submit">create</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  createAnecdote,
  setNotification,
  resetNotification,
};

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm);
export default ConnectedAnecdoteForm;
