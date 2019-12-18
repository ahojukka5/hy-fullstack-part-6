import deepFreeze from 'deep-freeze';
import anecdoteReducer, { getId } from './anecdoteReducer';

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

describe('anecdoteReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = anecdotesAtStart.map(asObject);
  });

  test('should return a proper initial state when called with undefined state', () => {
    const state = anecdoteReducer(undefined, { type: 'DO_NOTHING' });
    deepFreeze(state);
    expect(state).toEqual([]);
  });

  test('adds vote for anecdote using action VOTE', () => {
    const id = initialState[0].id;
    const action = { type: 'VOTE', data: { id } };
    const state = anecdoteReducer(initialState, action);
    deepFreeze(state);
    expect(state.find((a) => a.id === id).votes).toBe(1);
  });

  test('creates new anecdote with action NEW_ANECDOTE', () => {
    const id = Number((Math.random() * 1000000).toFixed(0));
    const content = 'If the test works, do not touch it.';
    const votes = 0;
    const action = { type: 'NEW_ANECDOTE', data: { id, content, votes } };
    const state = anecdoteReducer(initialState, action);
    deepFreeze(state);
    const newAnecdote = state.find((a) => a.id === id);
    expect(newAnecdote.content).toEqual(content);
    expect(newAnecdote.votes).toBe(0);
  });
});
