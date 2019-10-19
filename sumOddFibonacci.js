// Fibonacci sequence is the serious of numbers: 0,1,1,2,3,5,8,13,21,34......
// The next number is found by adding up the two numbers before it.
// Given a number, find the sum of odd fibonacci numbers.

function sumOddFibonacci(num) {
    let result = 0;
    let previous = 0;
    let current = 1;

    while (current <= num) {
        if (current % 2 !== 0) {
            result += current;
        }
        const nextCurrent = current + previous;
        previous = current;
        current = nextCurrent;
    }

    return result;
}

console.log(sumOddFibonacci(10))