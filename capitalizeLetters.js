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


//-----------------------

function capitalize(str) {
    const words = [];

    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}

console.log(capitalize('this one is easy'))

//-------------------------

function capitalizee(str) {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if(str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(capitalizee('this one is easy'))