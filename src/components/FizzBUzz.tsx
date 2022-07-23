import { useState } from "react";

export default function FizzBUzz(): JSX.Element {
  const [fizzBuzzNumber, nextFizzBuzzNumber] = useState(1);
  const [storedFizzBuzzNumbers, nextFizzBuzzIteration] = useState<
    (number | string)[]
  >([]);

  const num = fizzBuzzNumber;

  const isFizz = (currentNumber: number): boolean => {
    if (currentNumber % 3 === 0) {
      return true;
    }
    return false;
  };

  const isBuzz = (currentNumber: number): boolean => {
    if (currentNumber % 5 === 0) {
      return true;
    }
    return false;
  };

  const asFizzBuzz = (value: number): number | string => {
    if (isFizz(num) === true) {
      return "Fizz";
    }
    if (isBuzz(num) === true) {
      return "Buzz";
    } else {
      return num;
    }
  };

  const handleNextNumber = () => {
    nextFizzBuzzNumber(fizzBuzzNumber + 1);
  };

  const handleStoredNumbers = () => {
    nextFizzBuzzIteration([...storedFizzBuzzNumbers, asFizzBuzz(num)]);
  };

  return (
    <>
      <h1>FizzBuzz</h1>
      <p>Your stored numbers: {storedFizzBuzzNumbers.join(",")}</p>
      <p>Counter: {asFizzBuzz(num)}</p>
      <button onClick={handleNextNumber}>NEXT</button>
      <hr />
      <button onClick={handleStoredNumbers}>Store current count</button>
    </>
  );
}
