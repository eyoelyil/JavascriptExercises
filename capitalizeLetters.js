// Return a string with the first letter of every word capitalized

function capitalizeLetters(str) {
    const strArray = str.toLowerCase().split(' ');

    for(let i = 0; i < strArray.length; i++) {
        strArray[i] = strArray[i].substring(0, 1).toUpperCase() + strArray[i].substring(1);
    }
    return strArray.join(' ');
}

console.log(capitalizeLetters('happ new year'))

function capitalizeFirstWord(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.substr(1))
        .join(' ')
}

console.log(capitalizeFirstWord('i love javascript'))

// using regular expressions

function regExe(str) {
    return str.replace(/\b[a-z]/gi, function (word) {
        return word.toUpperCase()
    })
}

console.log(regExe('this is with regular expressions'))