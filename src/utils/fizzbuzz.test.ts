import { isFizz } from "./fizzbuzz";
import { isBuzz } from "./fizzbuzz";
import { asFizzBuzz } from "./fizzbuzz";
import { nextFizzBuzzIteration } from "./fizzbuzz";

test("isFizz returns a boolean, if number is divisible by three", () => {
  expect(isFizz(3)).toBe(true);
  expect(isFizz(4)).toBe(false);
});

test("asFizzBuzz returns a string, if number is divisible by three or five; or a number if enything else", () => {
  expect(asFizzBuzz(3)).toBe("Fizz");
  expect(asFizzBuzz(4)).toBe(4);
});

test("nextFizzBuzz returns an array with numbers and strings", () => {
  expect(nextFizzBuzzIteration([1, 2, "Fizz"])).toStrictEqual([
    1,
    2,
    "Fizz",
    4,
  ]);
  expect(nextFizzBuzzIteration([1, 2, "Fizz", 4])).toStrictEqual([
    1,
    2,
    "Fizz",
    4,
    "Buzz",
  ]);
});

/* test("greet returns a string, greeting the passed name", () => {
    expect(greet("World")).toBe("Hello, World!");
    expect(greet("Richard")).toBe("Hello, Richard!");
    expect(greet("Academy Scholars")).toBe("Hello, Academy Scholars!");
  });
  */
