// fizzBuzz, print "fizz" if the number is multiple of 3, "buzz" for 5 and "fizzbuzz" for both 3 & 5;

function fizzBuzz(n) {
    for(let i = 1; i <= n; i++) {
        if(i%15===0) {
            console.log("fizzBuzzz")
        } else if (i%5=== 0){
            console.log("buzzz")
        } else if (i%3 === 0) {
            console.log("fizz")
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(30)