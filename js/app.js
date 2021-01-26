
const shoot = document.querySelector('.shoot');
shoot.addEventListener('click', (e) => {
    console.log('clicked');
})

shoot.addEventListener('mousemove', (e) => {
    let log = document.querySelector('#log');
    log.innerText = `Screen X/Y: ${e.screenX}, ${e.screenY}`
});

const bugs = document.querySelector('.bug');
bugs.addEventListener('click', () => {
    moveBug();
    console.log("bug");
    increaseScore();
})

const moveBug = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    bugs.style.top = randomPos(w) + 'px';
    bugs.style.left = randomPos(h) + 'px';
}


const increaseScore = () => {
    const score = document.querySelector("#score-counter span").innerHTML;
    let count = Number(score);
    score.innerHTML = count + 1;
}

const randomPos = (num) => {
    return Math.floor(Math.random() * Math.floor(num))
}

