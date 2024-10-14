import { add } from '../utils/stringCalculator';

describe('String Calculator', () => {
  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return the number for a single number', () => {
    expect(add("1")).toBe(1);
  });

  test('should return the sum of two numbers', () => {
    expect(add("1,5")).toBe(6);
  });

  test('should return the sum of numbers with new line delimiter', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('should throw error for negative numbers', () => {
    expect(() => add("1,-2")).toThrow("Negative numbers not allowed: -2");
  });
});
