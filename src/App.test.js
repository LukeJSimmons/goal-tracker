import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HomePage', () => {
  render(<App />);
  const homePage = screen.getByTestId(/homePage/i);
  expect(homePage).toBeInTheDocument();
});

test('renders Root', () => {
  render(<App />);
  const root = screen.getByTestId(/root/i);
  expect(root).toBeInTheDocument();
})
