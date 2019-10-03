//reverse a given string

function reverse(str) {
   return str.split('').reverse('').join('')
}

console.log(reverse('hello'))


// without reverse() method or any other methods. Only using for loop

/* function reverseStr(str) {
   let reversed = '';
    
    for(let i = str.length - 1; i >= 0; i--) {
      reversed = reversed + str[i]
   }
   return reversed; 
}*/

/* function reverseStr(str) {
      let reversed = '';

    for (let i = 0; i < str.length; i++) {
      reversed = str[i] + reversed;
   }
   return reversed; 
}*/

// for of loop
/* function reverseStr(str) {
let reversed = '';

   for (let word of str) {
      reversed = word + reversed;
   }
   return reversed;
}

console.log(reverseStr('hello world')) */

//higher order array method for each loop
function reverseStr(str) {
   let reversed = '';

   str.split('').forEach (function(word) {
      reversed = word + reversed;
   }) 
      
   return reversed;
}

console.log(reverseStr('hello world')) 

//ES6 arrow function for the forEach
function reverseStr(str) {
   let reversed = '';

   str.split('').forEach(word => reversed = word + reversed);
   return reversed;
}

console.log(reverseStr('arrowfunction'));


// using reduce() method, since reduce() iterate through ar array, the given string should be changed to array, use .split('')

function reverseUsingReduce(str) {
   return str.split('').reduce((reversed,word) => word + reversed, '');
}

console.log(reverseUsingReduce('reducereverse'))