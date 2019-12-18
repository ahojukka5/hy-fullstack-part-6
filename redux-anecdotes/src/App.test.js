import App from './App';
import React from 'react';
import {
  render,
  cleanup,
  waitForElement,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import combinedReducer from './reducers';
import thunk from 'redux-thunk';
jest.mock('./services/anecdotes');

describe('<App />', () => {
  let store, component;

  beforeEach(async () => {
    store = createStore(combinedReducer, applyMiddleware(thunk));
    component = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await waitForElement(() => component.getByText('Anecdotes'));
  });

  afterEach(cleanup);

  test('renders anecdotes when application is started', async () => {
    const anecdote = store.getState().anecdotes[0];
    expect(component.container).toHaveTextContent(anecdote.content);
  });

  test('increases votes by one when clicking "vote"', async () => {
    expect(component.container).not.toHaveTextContent('has 1 vote');
    const button = component.container.querySelector('div > button');
    fireEvent.click(button);
    await waitForElement(() => component.getByText(/has been voted/));
    expect(component.container).toHaveTextContent('has 1 vote(s)');
  });

  test('adds new anecdote with a form', async () => {
    const form = component.container.querySelector('input[name=anecdote]');
    const content = 'If the test works, do not touch it.';
    fireEvent.change(form, {
      target: { anecdote: { value: content } },
    });
    fireEvent.submit(form);
    expect(component.container).toHaveTextContent(content);
  });

  test('sorts anecdotes with respect to number of votes', async () => {
    let anecdotes = component.container.querySelectorAll('div.anecdote');
    const secondText = anecdotes[1].querySelector('div').textContent;
    const button = anecdotes[1].querySelector('button');
    fireEvent.click(button);
    await waitForElement(() => component.getByText(/has been voted/));
    expect(component.container).toHaveTextContent('has 1 vote(s)');
    anecdotes = component.container.querySelectorAll('div.anecdote');
    const firstTextUpdated = anecdotes[0].querySelector('div').textContent;
    expect(firstTextUpdated).toBe(secondText);
  });
});
