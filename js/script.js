const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const jumps = document.querySelector('.jump');
const timeDisplay = document.getElementById('time-display');


const jump = () => {
    mario.classList.add('jump')
    setTimeout(()=> {
        mario.classList.remove('jump')
    }, 500)
}

let time = 0;
let velocity = 3;
let durationJump = 500;

const handleTime = setInterval(()=> {
    time = time + 1;
    timeDisplay.innerText = `Tempo: ${time}  VELOCIDADE: ${velocity}`;
}, 1000)

const handleDifuculty = setInterval(()=> {
    velocity --
    durationJump = durationJump - 50
    pipe.style.animation = `pipe-animation ${velocity}s infinite linear`;
    if( velocity <= 1){
        jumps.style.animation = `jump ${durationJum}ms ease-ou`
    }
    if(velocity <= 1) {
        clearInterval(handleDifuculty)
    }
}, 10000)

const loop = setInterval(()=> {

    const pipePosition = pipe.offsetLeft;
    
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition <= 145 && pipePosition > 0 && marioPosition < 80 ) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        clearInterval(loop);
        clearInterval(handleTime);
    }

}, 10);

document.addEventListener('keydown', jump)