// Given an array and chunk size, divide the array into many subarrays where each subarray is of length size
//Steps, create empty array to hold chunks called 'chunkde', for each element in the 'unchunked' array - retrieve the last element in 'chunkec',
// if last element does not exist, or if its length is equal to chunk size, push a new chunk into 'chunked' with current element, else add the current element into the chunk.


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

 //
function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index,index + size))
        index += size;
    }
    return chunked;
}

console.log(chunk([1,2,3,4,5], 2))