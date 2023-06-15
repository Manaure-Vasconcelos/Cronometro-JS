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

            minutesEl.textContent = minutes
            secondsEl.textContent = seconds
            millisecondsEl.textContent = milliseconds
        }
    }, 10)
}