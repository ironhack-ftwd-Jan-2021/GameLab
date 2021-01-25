
const shoot = document.querySelector('.shoot');
shoot.addEventListener('click', (e) => {
    console.log('clicked');
})

shoot.addEventListener('mousemove', (e) => {
    let log = document.querySelector('#log');
    log.innerText = `Screen X/Y: ${e.screenX}, ${e.screenY}`
});