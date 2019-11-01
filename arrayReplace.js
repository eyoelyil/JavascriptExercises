function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    inputArray.forEach((element, index) => {
        if(element === elemToReplace) {
            inputArray[index] = substitutionElem;
        }
    })

    return inputArray;
}

console.log(arrayReplace([1, 2, 3], 1, 3));