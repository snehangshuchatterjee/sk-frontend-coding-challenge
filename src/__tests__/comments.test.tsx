import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ComponentsList } from '../pages/CommentsList';
import store from '../redux/store';

test('Comments render successfully', () => {
  render(
    <Provider store={store}>
      <ComponentsList />
    </Provider>,
  );

  const element = screen.getByText(/user_1/i);

  expect(element).toBeInTheDocument();
});

test('There is a placeholder to enter text', () => {
  render(
    <Provider store={store}>
      <ComponentsList />
    </Provider>,
  );

  const element = screen.getByTestId('new-comment-textbox');

  expect(element).toBeInTheDocument();
});

test('There is a button to submit a Comment', () => {
  render(
    <Provider store={store}>
      <ComponentsList />
    </Provider>,
  );

  const element = screen.getByTestId('Reply');

  expect(element).toBeInTheDocument();
});

test('There is a button to cancel a Comment', () => {
  render(
    <Provider store={store}>
      <ComponentsList />
    </Provider>,
  );

  const element = screen.getByTestId('Cancel');

  expect(element).toBeInTheDocument();
});

test('New comment should be added to the screen', () => {
  render(
    <Provider store={store}>
      <ComponentsList />
    </Provider>,
  );

  const textField = screen.getByTestId('new-comment-textbox');
  const replyButton = screen.getByTestId('Reply');

  fireEvent.change(textField, {
    target: { value: 'Sample Comment' },
  });
  fireEvent.click(replyButton);

  const elementComment = screen.getByText(/Sample Comment/i);
  const elementTimestamp = screen.getByText(/today/i);

  expect(elementComment).toBeInTheDocument();
  expect(elementTimestamp).toBeInTheDocument();
});

test('Cancel button should clear the textbox', () => {
  render(
    <Provider store={store}>
      <ComponentsList />
    </Provider>,
  );

  const textField = screen.getByTestId('new-comment-textbox');
  const cancelButton = screen.getByTestId('Cancel');

  fireEvent.change(textField, {
    target: { value: 'Sample Comment' },
  });
  fireEvent.click(cancelButton);

  expect(textField).toHaveValue('');
});

test('reply button click should add the user name to the text box', () => {
  render(
    <Provider store={store}>
      <ComponentsList />
    </Provider>,
  );

  const replyButton = screen.getAllByText('Reply')[0];

  fireEvent.click(replyButton);

  const textField = screen.getByTestId('new-comment-textbox');

  expect(textField).toHaveValue('@user_1');
});
