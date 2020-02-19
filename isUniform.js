// write a function isUniform() which takes an array as an argument and return true if all elements in the array are identical.

function isUniform(arr) {
    let first = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== first) {
            return false;
        }
    }
    return true;
}

console.log(isUniform([1,2,1,1]))
console.log(isUniform([1,1,1,1]))
console.log(isUniform(['a', 'b', 'a', 'a']))
console.log(isUniform(['a', 'a', 'a', 'a']))