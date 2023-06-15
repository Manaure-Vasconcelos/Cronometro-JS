const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const millisecondsEl = document.getElementById("milliseconds")
const startBtn = document.getElementById("startBtn")
const pauseBtn = document.getElementById("pauseBtn")
const resumeBtn = document.getElementById("resumeBtn")
const resetBtn = document.getElementById("resetBtn")

let interval
let minutes = 0;
let seconds = 0;
let milliseconds = 0; 
let isPaused = false;

startBtn.addEventListener("click", comecar)
pauseBtn.addEventListener("click", pausar)
resumeBtn.addEventListener("click", continuar)
resetBtn.addEventListener("click", resetar)

function comecar() {
    interval = setInterval(() => {
        if (!isPaused) {
            milliseconds += 10;

            if (milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }

            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesEl.innerHTML = formatTime(minutes)
            secondsEl.innerHTML = formatTime(seconds)
            millisecondsEl.innerHTML = formatMilliseconds(milliseconds)
        }
    }, 10)
    startBtn.style.display = 'none'
    pauseBtn.style.display = 'block'
}

function pausar() {
    isPaused = true
    pauseBtn.style.display = 'none'
    resumeBtn.style.display = 'block'
}

function continuar() {
    isPaused = false
    resumeBtn.style.display = 'none'
    pauseBtn.style.display = 'block'
}

function resetar() {
    clearInterval(interval)
    minutes = 0
    seconds = 0
    milliseconds = 0

    minutesEl.innerHTML = "00"
    secondsEl.innerHTML = "00"
    millisecondsEl.innerHTML = "000"

    startBtn.style.display = 'block'
    pauseBtn.style.display = 'none'
    resumeBtn.style.display = 'none'
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

function formatMilliseconds(time){
    return time < 100 ? `${time}`.padStart(3, "0") : time
} 
