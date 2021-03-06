/* Given an array and chunk size, divide the array into many subarrays where each subarray is of length size
Step-1, create empty array to hold chunks called 'chunked'
Step-2, for each element in the 'unchunked' array 
Step-3, retrieve the last element in 'chunked'
Step-4, if last element does not exist, or if its length is equal to chunk size,
        push a new chunk into 'chunked' with current element, 
        else add the current element into the chunk. 
*/


//Soluntion 1
/* function chunk(array, size) {
    const chunked = [];

    for (let element of array) {
        const last = chunked[chunked.length - 1]
        if(!last || last.length === size) {
            chunked.push([element])
        } else {
            last.push(element)
        }
    }
    return chunked;
}
 */

 // create empty 'chunked' array, create 'index' start at 0, while index is less than array.length, push a slice of length 'size' from 'array' into 'chunked', add 'size' to 'index'.
function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        // Slice out from the index to the index + the chunk length and push on to the chunked array
        chunked.push(array.slice(index,index + size))
        // increment by chunk length
        index += size;
    }
    return chunked;
}

console.log(chunk([1,2,3,4,5], 2))


//----------------


// initialize the chunked array
function chunkArray(arr, len) {
    const chunkedArr = []

    arr.forEach(function (val) {
        const last = chunkedArr[chunkedArr.length - 1];

        if (!last || last.length === len) {
            chunkedArr.push([val])
        } else {
            last.push(val)
        }
    })

    return chunkedArr;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2))