function steps(n) {
   
    for(let i = 1; i < n; i++) {
        let star = '';

        for(let j = 1; j <= n; j++) {
          if(j <= i) {
              star += '*';
          } else {
              star += ' ';
          }
    }
    console.log(star)
}
}

steps(6)