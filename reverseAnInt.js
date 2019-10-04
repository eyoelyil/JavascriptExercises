// Reversing an integer

 function reverseInt (int) {
    const reversed = int.toString().split('').reverse().join('')
        return parseInt(reversed)*Math.sign(int)                //parseInt() take the string and change it into an integer
}
 

/* function reverseInt(int) {
    return (parseInt(int.toString().split('').reverse().join(''))*Math.sign(int))
} */

console.log(reverseInt(-3456))