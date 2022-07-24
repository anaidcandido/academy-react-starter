import { useState } from "react";

export const isFizz = (currentNumber: number): boolean => {
  if (currentNumber % 3 === 0) {
    return true;
  }
  return false;
};

export const isBuzz = (currentNumber: number): boolean => {
  if (currentNumber % 5 === 0) {
    return true;
  }
  return false;
};

export const asFizzBuzz = (value: number): number | string => {
  if (isFizz(value) === true) {
    return "Fizz";
  }
  if (isBuzz(value) === true) {
    return "Buzz";
  } else {
    return value;
  }
};


export function nextFizzBuzzIteration(
  storedNumbers:(number|string)[]): (number|string)[] {
  const number=storedNumbers.length +1
  return ([...storedNumbers, asFizzBuzz(number)]);
}

