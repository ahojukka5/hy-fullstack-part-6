import anecdoteService from '../services/anecdotes';

export const getId = () => (100000 * Math.random()).toFixed(0);

export const initialState = [];

export const voteAnecdote = (anecdote) => async (dispatch) => {
  await anecdoteService.update({ ...anecdote, votes: anecdote.votes + 1 });
  dispatch({ type: 'VOTE', data: { id: anecdote.id } });
};

export const createAnecdote = (content) => async (dispatch) => {
  const data = await anecdoteService.createNew(content);
  dispatch({ type: 'NEW_ANECDOTE', data });
};

export const initializeAnecdotes = () => async (dispatch) => {
  const anecdotes = await anecdoteService.getAll();
  dispatch({ type: 'INIT_ANECDOTES', data: anecdotes });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE':
      const anecdote = state.find((a) => a.id === action.data.id);
      const changedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
      const newState = state.map((anecdote) =>
        anecdote.id !== changedAnecdote.id ? anecdote : changedAnecdote
      );
      return newState;
    case 'NEW_ANECDOTE':
      return [...state, action.data];
    case 'INIT_ANECDOTES':
      return action.data;
    default:
      return state;
  }
};

export default reducer;
