// Given a string, return the character that is most commonly used in the string.
// What is the most common charater in the string?
// Does string A hava the same characters as string B(is it an anagram)?
// Does the given string have any repeated characters in it?

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    str.split('').forEach(element => {
        if(charMap[element]) {
            charMap[element]++;
        } else {
            charMap[element] = 1;
        }
    });

    
    for(let elemtent in charMap) {
        if(charMap[elemtent] > max) {
           max = charMap[elemtent];
           maxChar = elemtent;
        }
    }
    return maxChar;
}

console.log(maxChar('javascriptaaa'));

//---------------------------------

const string = 'Hello World'
const obj = {};

for(let ele of string) {
    obj[ele] = obj[ele] + 1 || 1;
}

console.log(obj)