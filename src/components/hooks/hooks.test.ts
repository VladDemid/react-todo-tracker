import { isPositive } from "./service";

describe("hooks test", () => {
  test("5 is positive", () => {
    expect(isPositive(5)).toBe(true);
  });

  test("0 is positive", () => {
    expect(isPositive(0)).toBe(true);
  });

  test("-10 is positive", () => {
    expect(isPositive(-10)).toBe(false);
  });

  test("array test", () => {
    expect([1, 3]).toEqual([1, 2, 3]);
  });
});
