// Given a rectangle matrix of characters, add a border of asterisk(*) to it.

function addAsterisk(pic) {
    const lengthOfWall = pic[0].length + 2;
    let wall = '';

    for (let i = 0; i < lengthOfWall; i++) {
        wall = wall.concat('*')
    }

    pic.unshift(wall);
    pic.push(wall);

    for (let i = 1; i < pic.length - 1; i++) {
        pic[i] = '*'.concat(pic[i], '*')
    }
    return pic;
}


console.log(addAsterisk(["abc", "def"]))