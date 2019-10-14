// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// eg. seekAndDestroy([2,3,4,5,5,'hello'], 2,5) == [3,4,'hello']

// Solution 1: argument, indexOf, filter
function seekAndDestroy(arr) {
    const args = Array.from(arguments);               // construct a new array from the arguments

    function filterArr(arr) {
        // return true if not in the array
        return args.indexOf(arr) === -1;
    }

    return arr.filter(filterArr);
}

console.log(seekAndDestroy([2, 3, 4, 5, 5, 'hello'], 2, 5))

// Solution 2: ...rest, filter & includes
function seekAndDes(arr, ...rest) {
    return arr.filter(val => !rest.includes(val))
}

console.log(seekAndDes([2, 3, 4, 5, 5, 'hello'], 2, 5))
