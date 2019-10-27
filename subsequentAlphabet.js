/* Check whether the given string is a subsequence of the plaintext alphabet.
Duplication of alphabets will give a false value. */

function subsequenceAlphabet(str) {
    const chars = str.split('');
    const charValues = [];

    chars.forEach(ele => {
        charValues.push(ele.charCodeAt(0))
    });

    // The Set object lets you store unique values of any type, whether primitive values or object references.
    //console.log(new Set(charValues))

    // check for duplicate values
    if(new Set(charValues).size !== charValues.length) {
        return false;
    }
    
    for(let i = 0; i < charValues.length - 1; i++) {
        if(charValues[i] >= charValues[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(subsequenceAlphabet('acce'))
console.log(subsequenceAlphabet('cdce'))
console.log(subsequenceAlphabet('ace'))
console.log(subsequenceAlphabet('bxz'))