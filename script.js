let count = 1500;
let interval;
let countdown = document.getElementById("countdown");
let previousDuration = "pomodoro";
// let count = 2;

function actionButton() {
    let button = document.getElementById("actionButton");

    if (button.textContent.includes("start")) {
        button.textContent = "pause";
        startTimer();

    } else if (button.textContent.includes("pause")) {
        button.textContent = "resume";
        clearInterval(interval);

    } else if (button.textContent.includes("resume")) {
        button.textContent = "pause";
        startTimer();

    }
}

function startTimer(){
    
    countdown.innerHTML = secondsToTime(count);
    interval = setInterval(function() {
        count--;
        document.title = secondsToTime(count);
        countdown.innerHTML = secondsToTime(count);
        if (count == 0) {
            document.title = "Time's up!";
            clearInterval(interval);
        }
    }, 1000);
}

function secondsToTime(seconds){
    return new Date(seconds * 1000).toISOString().substring(14, 19)
}

function changeDuration(name){
    console.log(name)  

    clearInterval(interval);

    document.getElementById(previousDuration).classList.remove("durationButtonActive");;
    document.getElementById(name).classList.add("durationButtonActive");
    previousDuration = name;

    document.getElementById("actionButton").textContent = "start";

    if (name == "pomodoro") {
        count = 25*60;
    } else if (name == "short") {
        count = 5*60;
    } else if (name == "long") {
        count = 10*60;
    }

    countdown.innerHTML = secondsToTime(count);
}