// Convert chuncked array into flatten array

function flattenArray(arr) {
    return arr.reduce(function(a, b) {
        return a.concat(b)
    })
}

console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7, 8], [9]]))


// Solution 2
function flatten(arr) {
    return [].concat.apply([], arr);
}

console.log(flatten([[1, 2], [3, 4], [5, 6], [7, 8], [9]]))


// Solution 3
function add(arr) {
    return [].concat(...arr)
}

console.log(add([[1, 2], [3, 4], [5, 6], [7, 8], [9]]))