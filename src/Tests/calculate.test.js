// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';
// the component to test
import calculate from '../Logic/Calculate';

describe('Testing the calculate logic', () => {
  test('Press the button AC', () => {
    const obj = { total: null, next: null, operation: null };
    const btnName = 'AC';
    const result = calculate(obj, btnName);
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  test('When the user click 0 twice', () => {
    const obj = { total: null, next: '0', operation: null };
    const btnName = '0';
    const result = calculate(obj, btnName);
    expect(result).toEqual({});
  });

  test('When the user introduce the first number', () => {
    const obj = { total: null, next: null, operation: null };
    const btnName = '1';
    const result = calculate(obj, btnName);
    expect(result).toEqual({ total: null, next: '1' });
  });

  test('When the user introduce a operator + after a number', () => {
    const obj = { total: null, next: '15', operation: null };
    const btnName = '+';
    const result = calculate(obj, btnName);
    expect(result).toEqual({ total: '15', next: null, operation: '+' });
  });

  test('When the user introduce a second number for the operation', () => {
    const obj = { total: '15', next: null, operation: '+' };
    const btnName = '90';
    const result = calculate(obj, btnName);
    expect(result).toEqual({ total: '15', next: '90', operation: '+' });
  });

  test('When the user introduce = operator to get the result', () => {
    const obj = { total: '15', next: '90', operation: '+' };
    const btnName = '=';
    const result = calculate(obj, btnName);
    expect(result).toEqual({ total: '105', next: null, operation: null });
  });

  test('When the user introduce = after get a result', () => {
    const obj = { total: '105', next: null, operation: null };
    const btnName = '=';
    const result = calculate(obj, btnName);
    expect(result).toEqual({});
  });

  test('When the user introduce a number after get the result', () => {
    const obj = { total: '105', next: null, operation: null };
    const btnName = '9';
    const result = calculate(obj, btnName);
    expect(result).toEqual({ total: null, next: '9' });
  });

  test('When the user introduce an operator x after get the result', () => {
    const obj = { total: '105', next: null, operation: null };
    const btnName = 'x';
    const result = calculate(obj, btnName);
    expect(result).toEqual({ total: '105', next: null, operation: 'x' });
  });
});

describe('Diferent cases when the user click .', () => {
  test('When the user introduce a . without a previous number', () => {
    const obj = { total: null, next: null, operation: null };
    const btnName = '.';
    const result = calculate(obj, btnName);
    expect(result).toEqual({ total: null, next: '0.', operation: null });
  });

  test('When the user introduce a . after a previous number', () => {
    const obj = { total: null, next: '5', operation: null };
    const btnName = '.';
    const result = calculate(obj, btnName);
    expect(result).toEqual({ total: null, next: '5.', operation: null });
  });

  test('When the user introduce a . for second time', () => {
    const obj = { total: null, next: '7.', operation: null };
    const btnName = '.';
    const result = calculate(obj, btnName);
    expect(result).toEqual({ total: null, next: '7.', operation: null });
  });
});

describe('Test for the operator +/-', () => {
  test('When the user has a number and press the +/- operator', () => {
    const obj = { total: null, next: '7', operation: null };
    const btnName = '+/-';
    const result = calculate(obj, btnName);
    expect(result).toEqual({ total: null, next: '-7', operation: null });
  });
  test('When the user pressed the operator +/- after had pressed once', () => {
    const obj = { total: null, next: '-7', operation: null };
    const btnName = '+/-';
    const result = calculate(obj, btnName);
    expect(result).toEqual({ total: null, next: '7', operation: null });
  });
});
