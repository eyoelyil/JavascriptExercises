/* Some people are standing in a row in a park. There are trees between them which cannot be moved. 
   Arrange the people by their heights in a ascending order without moving the trees. The trees are represented by -1
   eg.   a = [-1, 150, 190, 170, -1, -1, 160, 180] 
   sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]
*/

function sortByHeight(a) {
    const arr1 = [];
    const arr2 = [];

    a.forEach((value, index) => {
        if(value === -1) {
            arr1.push(index)
        } else {
            arr2.push(value)
        }
    });
    console.log(arr1, arr2)

    const sortArr = arr2.sort((a, b) => a - b)

    arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1))               // splice(start, deleteItem, addItem)

    return sortArr;
}

const a = [-1, 150, 190, 170, -1, -1, 160, 180] 
console.log(sortByHeight(a))