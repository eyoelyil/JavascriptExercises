function longestWord(sen) {
    // Create filtered array
    const wordArr = sen.match(/[a-z0-9]+/gi);

    // Sort by length
    const sorted = wordArr.sort(function (a,b) {
        return b.length - a.length;
    })
    // If multiple words, put into array
    const longestWordArr = sorted.filter(function(word) {
        return word.length === sorted[0].length;
    })

    // Check if more than one array value
    if(longestWordArr.length === 1) {
        // return the word
        return longestWordArr[0]
    } else {
        return longestWordArr
    }
}

console.log(longestWord("Hellooo, there my name is Kim Don Un"))