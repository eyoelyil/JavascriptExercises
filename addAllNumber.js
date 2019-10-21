// Add all numbers
// Return a sum of all parameters entered regardless of the amount of numbers(No Arrays)
// eg. addAll(2,3,4) === 9


// Solution 1 ES5 arguments & for loop
function addAll() {
    var args = Array.prototype.slice.call(arguments);
    let sum = 0;
    for(let i = 0; i < args.length; i++) {
        sum = sum + args[i];
    }
    return sum;
}

console.log(addAll(2,3,4))

// Solution 2 ES6 reduce()
function addNum(...num) {
    return num.reduce((a, b) => a + b)
}

console.log(addNum(2,3,4))

// Solution 3 using rest(), 
function add(...num) {
    let total = 0;
    num.forEach(numbers => total += numbers)
    return total;
}

console.log(add(5,6,7))

