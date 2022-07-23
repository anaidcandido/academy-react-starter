import { useState } from "react";

export default function FizzBUzz(): JSX.Element{
    const [numberFromCurrentRender, queueRerenderWithNewNumber]=
    useState(1);
    const [storedNumbersCurrentRender, queueRerenderWithStoredNumbers]=
    useState<(number|string)[]>([]);

    const num = numberFromCurrentRender
    function fizzbuzz(value :number): number|string { 
        if (num%3 === 0) {
            return "fizz"
        } else if (num%5 === 0){
            return "buzz"
        } else {
            return num
        }  
    }

    const handleNextNumber= () => {
        queueRerenderWithNewNumber(numberFromCurrentRender + 1)
    }

    const handleStoredNumbers = () =>{
        queueRerenderWithStoredNumbers([...storedNumbersCurrentRender,
            fizzbuzz(num),
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