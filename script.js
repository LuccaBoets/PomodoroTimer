let count = 1500;
let interval;
let countdown = document.getElementById("countdown");
let previousDuration = "pomodoro";
let themes = [];
// let count = 2;

fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://pastebin.com/raw/kc0jj6gB')}`)
    .then(response => {
        if (response.ok) return response.json()
        throw new Error('Network response was not ok.')
    })
    .then(data => {
        console.log(JSON.parse(data.contents));
        loadThemes(JSON.parse(data.contents));
    });

function loadThemes(data) {
    let selection = document.getElementById("theme");

    let count = 0;

    selection.addEventListener("change", function () {
        changeTheme(this.value);
    });
    
    themes = data;

    for (theme of data) {
        let option = document.createElement("option");
        option.value = theme.name;
        option.textContent = theme.name;
        selection.appendChild(option);

        if (count == 0) {
            changeTheme(theme.name);
            selection.selected = true;
        }

        count++;
    }

    // var radios = document.getElementsByName("platform");
    // console.log(radios)
    // for (radio in radios) {
    //     // console.log(radios[radio])
    //     radios[radio].onclick = function () {
    //         console.log(this.value)
    //         changeTheme(this.value);
    //     }
    // }
    
    // const radios = document.querySelectorAll('input[type="radio"][name="platform"]');
    // console.log(radios)
    // radios.forEach(radio => {
    //     radio.addEventListener("click", function () {
    //         changeTheme(this.value);
    //         if (this.checked) {
    //             // Do something when the radio button is selected
    //             console.log(`Radio button with value ${this.value} selected`);
    //         }
    //     });
    // });

    // document.body.innerHTML += style.outerHTML;
    // console.log(style.innerHTML);
}

function changeTheme(name) {
    // let theme = getCheckedValue("platform");
    console.log(name);

    let theme = themes.find(theme => theme.name == name);
    console.log(theme);

    document.body.style.backgroundImage = `url(${theme.backgroundUrl})`;
}

function getCheckedValue(groupName) {
    var radios = document.getElementsByName(groupName);
    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return null;
}

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

function startTimer() {

    countdown.innerHTML = secondsToTime(count);
    interval = setInterval(function () {
        count--;
        document.title = secondsToTime(count);
        countdown.innerHTML = secondsToTime(count);
        if (count == 0) {
            document.title = "Time's up!";
            clearInterval(interval);
        }
    }, 1000);
}

function secondsToTime(seconds) {
    return new Date(seconds * 1000).toISOString().substring(14, 19)
}

function changeDuration(name) {
    console.log(name)

    clearInterval(interval);

    document.getElementById(previousDuration).classList.remove("durationButtonActive");;
    document.getElementById(name).classList.add("durationButtonActive");
    previousDuration = name;

    document.getElementById("actionButton").textContent = "start";

    if (name == "pomodoro") {
        count = 25 * 60;
    } else if (name == "short") {
        count = 5 * 60;
    } else if (name == "long") {
        count = 10 * 60;
    }

    countdown.innerHTML = secondsToTime(count);
}