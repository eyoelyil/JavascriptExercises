// Anagram example 'elbow' === 'below', 'Dormitory' === 'dirty room'

function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2)
}

// Helper function
function formatStr(str) {
    return str
    .replace(/[^\w]/g, '')               // replace anything that is not word character, number will give false
    .toLowerCase()
    .split('')
    .sort()
    .join('')
        
}

console.log(isAnagram('elbow', 'below  &'))