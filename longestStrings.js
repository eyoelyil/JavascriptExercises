function longestString(arr) {
    let longestLength = 0;
    const longestWords = [];

    arr.forEach(word => {
        longestLength = longestLength < word.length ? word.length : longestLength;
    });

    arr.forEach(word => {
        if(word.length === longestLength) {
            longestWords.push(word);
        }
    })

    return longestWords;
}

console.log(longestString(["abcd", "abc", "abd", "defg"]))