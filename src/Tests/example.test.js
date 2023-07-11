// import react-testing methods
import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
// userEvent library simulates user interactions by dispatching the events that would
// happen if the interaction took place in a browser.
import userEvent from '@testing-library/user-event';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';
// the component to test
import Calculator from '../routers/Calculator';
import CalculatorApp from '../Components/CalculatorApp';

test('Practice complex testing', () => {
  // Render a React element into the DOM
  render(<Calculator />);

  userEvent.click(screen.getByText('7'));
  userEvent.click(screen.getByText('+'));
  userEvent.click(screen.getByText('8'));
  userEvent.click(screen.getByText('='));
  userEvent.click(screen.getByText('x'));
  userEvent.click(screen.getByText('5'));
  userEvent.click(screen.getByText('='));
  userEvent.click(screen.getByText('='));

  // assert that the alert message is correct using
  // toHaveTextContent, a custom matcher from jest-dom.
  expect(screen.getByTitle('span')).toHaveTextContent('0');
});

test('Practice simple testing 2', () => {
  // Render a React element into the DOM
  render(<Calculator />);

  userEvent.click(screen.getByText('7'));
  userEvent.click(screen.getByText('+'));
  userEvent.click(screen.getByText('8'));
  userEvent.click(screen.getByText('='));

  // assert that the alert message is correct using
  // toHaveTextContent, a custom matcher from jest-dom.
  expect(screen.getByTitle('span')).toHaveTextContent('15');
});

test('Render correctly', async () => {
  // Render a React element into the DOM
  const page = TestRenderer
    .create(
      <div className="calculatorPage d-flex">
        <h3>Let&apos;s do some math!</h3>
        <CalculatorApp />
      </div>,
    )
    .toJSON();

  expect(page).toMatchSnapshot();
});
