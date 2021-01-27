// const shoot = document.querySelector('.shoot');
// shoot.addEventListener('mousemove', (e) => {
//     let log = document.querySelector('#log');
//     log.innerText = `Screen X/Y: ${e.screenX}, ${e.screenY}`
// });


const bugs = document.querySelector('#bugDiv');
bugs.addEventListener('click', () => {
    moveBug();
    randomImage();    
    increaseScore();
    console.log(bugs);
})


const bugArr = new Array('/assets/bug1.png', '/assets/bug2.png', '/assets/bug3.png', '/assets/bug4.png')
const randomImage = () => {
    let randomBug = Math.floor(Math.random() * bugArr.length);
    document.querySelector('.bugs').src = bugArr[randomBug];
}

const moveBug = () => {
    let topCords = randomPos(600);
    let leftCords = randomPos(800);
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
    let randomNum = Math.floor(Math.random() * 500);
    console.log('random position: ',randomNum);
    return randomNum;
}

