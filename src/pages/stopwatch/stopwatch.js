let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchTime = 0;

let timerInterval;
let timerRunning = false;
let timerTime = 0;
let timerEndTime = 0;

function startStop() {
    if (stopwatchRunning) {
        clearInterval(stopwatchInterval);
        document.getElementById("startStop").textContent = "Start";
    } else {
        stopwatchInterval = setInterval(updateStopwatch, 1000);
        document.getElementById("startStop").textContent = "Stop";
    }
    stopwatchRunning = !stopwatchRunning;
}

function reset() {
    clearInterval(stopwatchInterval);
    document.getElementById("stopwatchDisplay").textContent = "00:00:00";
    document.getElementById("startStop").textContent = "Start";
    stopwatchRunning = false;
    stopwatchTime = 0;
}

function updateStopwatch() {
    stopwatchTime++;
    const hours = Math.floor(stopwatchTime / 3600);
    const minutes = Math.floor((stopwatchTime % 3600) / 60);
    const seconds = stopwatchTime % 60;
    document.getElementById("stopwatchDisplay").textContent = `${hours}:${minutes}:${seconds}`;
}

function setTimer() {
    const timerInput = document.getElementById("timerInput");
    const inputTime = timerInput.value;
    timerEndTime = parseInt(inputTime) * 60;
    updateTimerDisplay(timerEndTime);
}

function startTimer() {
    if (!timerRunning && timerEndTime > 0) {
        timerInterval = setInterval(updateTimer, 1000);
        timerRunning = true;
        document.getElementById("timerInput").disabled = true; 
        document.getElementById("startTimer").textContent = "Pause";
        document.getElementById("startTimer").onclick = pauseTimer;
    }
}

function pauseTimer() {
    if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
        document.getElementById("startTimer").textContent = "Resume";
        document.getElementById("startTimer").onclick = resumeTimer;
    }
}

function resumeTimer() {
    if (!timerRunning) {
        timerInterval = setInterval(updateTimer, 1000);
        timerRunning = true;
        document.getElementById("startTimer").textContent = "Pause";
        document.getElementById("startTimer").onclick = pauseTimer;
    }
}

function updateTimer() {
    if (timerEndTime <= 0) {
        clearInterval(timerInterval);
        timerRunning = false;
        document.getElementById("timerInput").disabled = false; 
        document.getElementById("startTimer").textContent = "Start Timer";
        alert("Timer has finished!");
    } else {
        timerEndTime--;
        updateTimerDisplay(timerEndTime);
    }
}

function updateTimerDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById("timerDisplay").textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
