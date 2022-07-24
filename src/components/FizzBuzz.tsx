import { useState } from "react";

export default function FizzBuzz(): JSX.Element {
  const [fizzBuzzNumber, nextFizzBuzzNumber] = useState(1);
  const [storedFizzBuzzNumbers, nextFizzBuzzIteration] = useState<
    (number | string)[]
  >([]);

  const handleNextNumber = () => {
    nextFizzBuzzNumber(fizzBuzzNumber + 1);
  };

  const handleStoredNumbers = () => {
    nextFizzBuzzIteration([
      ...storedFizzBuzzNumbers,
      asFizzBuzz(fizzBuzzNumber),
    ]);
  };

  return (
    <>
      <h1>FizzBuzz</h1>
      <p>Your stored numbers: {storedFizzBuzzNumbers.join(",")}</p>
      <p>Counter: {asFizzBuzz(fizzBuzzNumber)}</p>
      <button onClick={handleNextNumber}>NEXT</button>
      <hr />
      <button onClick={handleStoredNumbers}>Store current count</button>
    </>
  );
}

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
