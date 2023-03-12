import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Points calculator caption', () => {
  render(<App />);
  const linkElement = screen.getByText(/Points calculator/i);
  expect(linkElement).toBeInTheDocument();
});
