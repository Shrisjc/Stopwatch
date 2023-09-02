// script.js
let startTime = 0;
let intervalId;

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

function startTimer() {
    if (!intervalId) {
        startTime = Date.now() - (startTime || 0);
        intervalId = setInterval(updateTimer, 10);
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }
}

function stopTimer() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}

function resetTimer() {
    stopTimer();
    startTime = 0;
    display.textContent = '00:00:00';
}

function updateTimer() {
    const currentTime = Date.now() - startTime;
    const milliseconds = Math.floor(currentTime % 1000);
    const seconds = Math.floor((currentTime / 1000) % 60);
    const minutes = Math.floor((currentTime / (1000 * 60)) % 60);
    const hours = Math.floor((currentTime / (1000 * 60 * 60)) % 24);

    display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}.${formatMilliseconds(milliseconds)}`;
}

function formatTime(time) {
    return time.toString().padStart(2, '0');
}

function formatMilliseconds(milliseconds) {
    return milliseconds.toString().padStart(3, '0');
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

resetTimer(); // Initialize the timer display
