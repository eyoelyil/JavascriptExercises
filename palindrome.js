//Palindromes are words that form the same word if it is reversed.
//Given a string, return true id the string is a palindrome.

function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed
        
}

console.log(palindrome('woooooow'))