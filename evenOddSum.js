/* Write a function that takes an array of integers as an argument and returns a value based on the sums of the even and odd numbers 
in the array. Let X = the sum of the odd numbers in the array and let Y = the sum of the even numbers. 
The function should return X – Y */

function evenOddSum (arr) {
    let sumEven = 0;
    let sumOdd = 0;

    for(i = 0; i < arr.length; i++) {
        if(arr[i]%2 == 0) {
            sumEven = sumEven + arr[i]
        } else {
            sumOdd = sumOdd + arr[i]
        }
        
    }
    console.log(sumEven)
    console.log(sumOdd)
    return sumOdd - sumEven;
}

console.log(evenOddSum([1,2,3,4,5,6]))