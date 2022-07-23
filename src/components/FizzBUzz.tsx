import { useState } from "react";

export default function FizzBUzz(): JSX.Element{
    const [numberFromCurrentRender, queueRerenderWithNewNumber]=
    useState(1);
    const [storedNumbersCurrentRender, queueRerenderWithStoredNumbers]=
    useState<number[]>([]);

    const num = numberFromCurrentRender
    function fizzbuzz(value :number) { 
        if (num%5 === 0) {
            return "fizz"
    } else {
        return num
    }
    }

    const handleNextNumber= () => {
        queueRerenderWithNewNumber(numberFromCurrentRender + 1)
    }

    const handleStoredNumbers = () =>{
        queueRerenderWithStoredNumbers([...storedNumbersCurrentRender,
            numberFromCurrentRender,
        ])
    }

    return(
        <> 
          <h1>FizzBuzz</h1>
          <p>Your stored numbers: {storedNumbersCurrentRender.join(",")}</p>
          <p>Counter: {fizzbuzz(num)}</p>
          <button onClick={handleNextNumber}>NEXT</button>
          <hr/>
          <button onClick={handleStoredNumbers}>Store current count</button>
        </>      
    )
}