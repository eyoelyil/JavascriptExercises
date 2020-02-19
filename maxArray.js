// write a function max() that accept an array numbers and return the maximum number in the array.

function max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(max([1, 2, 3, 4]))