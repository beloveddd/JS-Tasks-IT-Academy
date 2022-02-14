function fizzBuzz() {

    let size = 100;

    for (let num = 1; num <= size; num++) {
        
        let answer = (num % 3 === 0 && num % 5 === 0 && "FizzBuzz") || (num % 3 !== 0 && "Fizz") || (num % 5 !== 0 && "Buzz");
        
        let numbers = ( (num % 3 === 0 || num % 5 === 0) && answer ) || num;
        console.log(numbers);
    }
}

fizzBuzz();
