// shoot.addEventListener('mousemove', (e) => {
//     let log = document.querySelector('#log');
//     log.innerText = `Screen X/Y: ${e.screenX}, ${e.screenY}`
// });

const bugs = document.querySelector('#bug');
bugs.addEventListener('click', () => {
    moveBug();
    randomImage();
    console.log(bugs);
    increaseScore();
})

const bugArr = new Array('/assets/worm1.png', '/assets/bug1.png', '/assets/spider1.png', '/assets/centipede1.png')
function randomImage() {
    let randomBug = Math.floor(Math.random() * bugArr.length);
    document.querySelector('#bug').src = bugArr[randomBug];
}

const moveBug = () => {
    let topCords = randomPos(600);
    let leftCords = randomPos(8000);
    bugs.style.top = `${topCords}px`;
    bugs.style.left = `${leftCords}px`;
}

const increaseScore = () => {
    const score = document.querySelector(".scoreContainer #score-counter span").innerHTML;
    let count = 0;
    score.innerHTML = count++;
    console.log('Count: ', count, 'Score: ',score);
}

const randomPos = () => {
    let randomNum = Math.floor(Math.random() * 1000);
    console.log('random position: ',randomNum);
    return randomNum;
}

