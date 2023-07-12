// import react-testing methods
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
// userEvent library simulates user interactions.
import userEvent from '@testing-library/user-event';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';
// the component to test
import Calculator from '../routers/Calculator';

describe('Test components', () => {
  test('Simulate user iteractions case 1', () => {
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

    expect(screen.getByTitle('span')).toHaveTextContent('0');
  });

  test('Simulate user iteractions case 2', () => {
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

  test('Render correctly', () => {
    // Render a React element into the DOM
    const page = renderer
      .create(<Calculator />)
      .toJSON();

    expect(page).toMatchSnapshot();
  });
});
