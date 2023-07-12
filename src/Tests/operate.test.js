// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';
// the component to test
import operate from '../Logic/operate';

describe('Oparate logic related to + operator', () => {
  test('Sum two numbers case 1', () => {
    const numOne = '5';
    const numTwo = '7';
    const operation = '+';
    const result = operate(numOne, numTwo, operation);
    expect(result).toMatch('12');
  });
  test('Sum two numbers case 2', () => {
    const numOne = '675';
    const numTwo = '66';
    const operation = '+';
    const result = operate(numOne, numTwo, operation);
    expect(result).toMatch('741');
  });
});

describe('Oparate logic related to - operator', () => {
  test('Subtraction two numbers case 1', () => {
    const numOne = '5';
    const numTwo = '7';
    const operation = '-';
    const result = operate(numOne, numTwo, operation);
    expect(result).toMatch('-2');
  });
  test('Subtraction two numbers case 2', () => {
    const numOne = '900';
    const numTwo = '66';
    const operation = '-';
    const result = operate(numOne, numTwo, operation);
    expect(result).toMatch('834');
  });
});

describe('Oparate logic related to x operator', () => {
  test('Multiplication two numbers case 1', () => {
    const numOne = '32';
    const numTwo = '5';
    const operation = 'x';
    const result = operate(numOne, numTwo, operation);
    expect(result).toMatch('160');
  });
  test('Multiplication two numbers case 2', () => {
    const numOne = '8';
    const numTwo = '-12';
    const operation = 'x';
    const result = operate(numOne, numTwo, operation);
    expect(result).toMatch('-96');
  });
});

describe('Oparate logic related to ÷ operator', () => {
  test('Divide two numbers case 1', () => {
    const numOne = '5';
    const numTwo = '7';
    const operation = '÷';
    const result = operate(numOne, numTwo, operation);
    expect(result).toMatch('0.71428571428571428571');
  });
  test('Divide two numbers case 2', () => {
    const numOne = '44';
    const numTwo = '22';
    const operation = '÷';
    const result = operate(numOne, numTwo, operation);
    expect(result).toMatch('2');
  });
  test('Divide two numbers case 3, divide by 0', () => {
    const numOne = '44';
    const numTwo = '0';
    const operation = '÷';
    const result = operate(numOne, numTwo, operation);
    expect(result).toMatch("Can't divide by 0.");
  });
});

describe('Oparate logic related to % (module) operator', () => {
  test('Module two numbers case 1', () => {
    const numOne = '9';
    const numTwo = '2';
    const operation = '%';
    const result = operate(numOne, numTwo, operation);
    expect(result).toMatch('1');
  });
  test('Module two numbers case 2', () => {
    const numOne = '4';
    const numTwo = '2';
    const operation = '%';
    const result = operate(numOne, numTwo, operation);
    expect(result).toMatch('0');
  });
  test('Module two numbers case 3, divide by 0', () => {
    const numOne = '44';
    const numTwo = '0';
    const operation = '%';
    const result = operate(numOne, numTwo, operation);
    expect(result).toMatch("Can't find modulo as can't divide by 0.");
  });
});
