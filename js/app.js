// const shoot = document.querySelector('.shoot');
// shoot.addEventListener('mousemove', (e) => {
//     let log = document.querySelector('#log');
//     log.innerText = `Screen X/Y: ${e.screenX}, ${e.screenY}`
// });
// const modal = document.querySelector('.modal');
// const startBtn = document.querySelector('#startBtn');
// startBtn.addEventListener('click', () => {
//     modal.style.display = "none"
// })


// mouse click on the image of the bug should call 3 functions:
// moveBug(), randomImage(), increaseScore()
const bugs = document.querySelector('#bugDiv');
bugs.addEventListener('click', () => {
    moveBug();
    randomImage();    
    increaseScore();
    // console.log(bugs);
})

//radnomImage() generates a random image from the array
const bugArr = new Array('/assets/bug1.png', '/assets/bug2.png', '/assets/bug3.png', '/assets/bug4.png')
const randomImage = () => {
    let randomBug = Math.floor(Math.random() * bugArr.length);
    document.querySelector('.bugs').src = bugArr[randomBug];
}

// moveBug() should move the image of the bug to a random position
// on the area of the screen

const moveBug = () => {
    let topCords = randomPos();
    let leftCords = randomPos();
    bugs.style.top = `${topCords}px`;
    bugs.style.left = `${leftCords}px`;
    console.log();
}

// increaseScore() should increase the score whenever the user clicks
// on the image of the bug, 
const increaseScore = () => {
    const score = document.querySelector(".scoreContainer #score-counter span").innerHTML;
    let count = 0;
    score.innerHTML = count++;
    // console.log('Count: ', count, 'Score: ',score);
}

// randomPos() should move the image on a radnom place on the screen
const randomPos = () => {
    let randomNum = Math.floor(Math.random() * 500);
    // console.log('random position: ',randomNum);
    return randomNum;
}

