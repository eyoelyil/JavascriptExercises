//reverse a given string

function reverse(str) {
   return str.split('').reverse('').join('')
}

console.log(reverse('hello'))


// without reverse() method or any other methods. Only using for loop

function reverseStr(str) {
   let reversed = '';
    
   for(let i = str.length - 1; i >= 0; i--) {
      reversed = reversed + str[i]
   }
   return reversed;
}

console.log(reverseStr('hello world'))