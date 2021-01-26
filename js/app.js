
const shoot = document.querySelector('.shoot');
shoot.addEventListener('click', (e) => {
    console.log('clicked');
})

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

const bugArr = new Array('/assets/worm1.png', '/assets/bug1.png', '/assets/spider1.png')
function randomImage() {
    let randomBug = Math.floor(Math.random() * bugArr.length);
    document.querySelector('#bug').src = bugArr[randomBug];
}

const moveBug = () => {
    const topCords = randomPos(650);
    const leftCords = randomPos(800);
    bugs.style.top = `${topCords}px`;
    bugs.style.left = `${leftCords}px`;
}

const increaseScore = () => {
    const score = document.querySelector("#score-counter").innerHTML;
    let count = score;
    console.log('Score: ',count);
    score.innerHTML = count + 1;
}

const randomPos = (num) => {
    let randomNum = Math.floor(Math.random() * Math.floor(num));
    console.log('random position: ',randomNum);
    return randomNum;
}

