// For integer numbers from 0 to n - 1, written down along a circle in such a way that the distance between any two neighbouring
// numbers is equal(note that 0 and n-1 are neighbouring too).
// Given n and firstNumber, find the number which is written in the radially opposite positions to firstNumber.

function circleOfNumber(n, firstNumber) {
    const numArray = [];
    const halfWay = n / 2;

    for (let i = 0; i < n; i++) {
        numArray.push(i);
    }

    if(firstNumber < halfWay) {
        return numArray[firstNumber + halfWay];
    }

    return numArray[firstNumber - halfWay];
}

console.log(circleOfNumber(11, 1));