function alternatingSums(arr) {
    let evenSum = 0;
    let oddSum = 0;

    arr.forEach((ele, index) => (index % 2 === 0) ? (evenSum += ele) : (oddSum += ele))

    return [evenSum, oddSum]
}

console.log(alternatingSums([1,2,3,4,5,6]))