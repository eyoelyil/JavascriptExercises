function vowelCount(str) {
    let count = 0;  
    const vowels = ['a', 'e', 'i', 'o', 'u']

    for (let char of str.toLowerCase()) {
        if(vowels.includes(char)) {
            count++
        }
    }
    return count;
}

console.log(vowelCount('hello world'))

// Using regex

function vowels(str) {
   const words = str.match(/[aeiou]/gi);
   return words ? words.length : 0;
}

console.log(vowels('There you are!'))