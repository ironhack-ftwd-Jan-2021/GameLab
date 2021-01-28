
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click', () => {
    modal.style.display = "none";
    overlay.style.display = "none";
    countDown();
})


// mouse click on the image of the bug should call 3 functions:
// moveBug(), randomImage(), increaseScore()
const bugs = document.querySelector('#bugDiv');
bugs.addEventListener('click', () => {
    moveBug();
    randomImage();    
    increaseScore();
})

//radnomImage() generates a random image from the array
const bugArr = new Array('../assets/bug1.png', '../assets/bug2.png', '../assets/bug3.png', '../assets/bug4.png')
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
}

// increaseScore() should increase the score whenever the user clicks
// on the image of the bug,
let count = 0;
const increaseScore = () => {
    const score = document.querySelector("#score")
    score.innerHTML = `×  ${count++}`;
}

// randomPos() should move the image on a radnom place on the screen
const randomPos = () => {
    let randomNum = Math.floor(Math.random() * 500);
    return randomNum;
}

// timer for the game
let counter = 0;
let timeLeft = 10;
const countDown = () => {
    let timer = document.querySelector('#timer');
    timer.innerHTML = `${timeLeft - counter}`;
    let randomTime = setInterval(randomImage, 1000);

    const interval = setInterval(timeIt, 1000);

    function timeIt() {
        counter ++;
        timer.innerHTML = `${timeLeft - counter}`;
    
        if(counter == timeLeft || score > 30) {
            counter = 0;
            console.log('win')
            clearInterval(interval);
            location.reload();
            gameWin();
        }
         else if (counter == timeLeft || score > 30){
            counter = 0;
            clearInterval(interval);
            gameLose();
        }
    }
}
const gameWin = () => {
    window.open("../assets/winVid.mp4")
}
const gameLose = () => {
    window.open("")
}