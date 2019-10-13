function sumAllPrime(num) {
    let total = 0;

    function checkForPrime(i) {
        for(let j = 2; j < i; j++) {
            if(i % j === 0) {
                return false;
            }
        }
        return true;
    }

    for(let i = 2; i <= num; i++) {
        if(checkForPrime(i)) {
            total += i;
        } 
    }
    return total;
}

console.log(sumAllPrime(10))


// Solution 2 
/*
Use Array.from() to generate a sequence of numbers up to and including num. 
Combine with .slice() to slice off first two indices [0, 1] since all prime numbers must be greater than 1.
If a number is not prime, it is divided by number > 1 other smaller than himself.
*/
function sumPrimes(num) {
    let nums = Array.from({ length: num + 1 })
        .map((_, i) => i)
        .slice(2);
    for (let n in nums) {
        nums = nums.filter(val => val == nums[n] || val % nums[n] != 0);
    }
    return nums.reduce((prevSum, cur) => prevSum + cur);
}

console.log(sumPrimes(100))