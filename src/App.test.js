import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

test('renders HomePage', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
);
  const homePage = screen.getByTestId(/homePage/i);
  expect(homePage).toBeInTheDocument();
});

test('renders Root', () => {
  render(
  <Provider store={store}>
    <App />
  </Provider>);
  const root = screen.getByTestId(/root/i);
  expect(root).toBeInTheDocument();
})
