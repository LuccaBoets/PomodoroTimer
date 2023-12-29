let count = 1500;
let interval;
let countdown = document.getElementById("countdown");
let previousDuration = "pomodoro";
let themes = [];
// let count = 2;

// fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://pastebin.com/raw/kc0jj6gB')}`)
//     .then(response => {
//         if (response.ok) return response.json()
//         throw new Error('Network response was not ok.')
//     })
//     .then(data => {
//         console.log(JSON.parse(data.contents));
//         loadThemes(JSON.parse(data.contents));
//     });

// function loadThemes(data) {
//     let selection = document.getElementById("theme");

//     let count = 0;

//     selection.addEventListener("change", function () {
//         changeTheme(this.value);
//     });

//     themes = data;

//     for (theme of data) {
//         let option = document.createElement("option");
//         option.value = theme.name;
//         option.textContent = theme.name;
//         selection.appendChild(option);

//         if (count == 0) {
//             changeTheme(theme.name);
//             selection.selected = true;
//         }

//         count++;
//     }
// }

// function changeTheme(name) {
//     console.log(name);

//     let theme = themes.find(theme => theme.name == name);
//     console.log(theme);

//     document.body.style.backgroundImage = `url(${theme.backgroundUrl})`;
// }

// function getCheckedValue(groupName) {
//     var radios = document.getElementsByName(groupName);
//     for (i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             return radios[i].value;
//         }
//     }
//     return null;
// }

// const wallpaperURLs = [
//     'https://firebasestorage.googleapis.com/v0/b/tapestry-grimoire.appspot.com/o/06cb1b99-e016-4e8f-bf67-eae78cf5f993%2F1601409469766.jpg?alt=media&token=58f8538f-bada-4b15-8ec5-8d90f3500db8',
//     'https://firebasestorage.googleapis.com/v0/b/tapestry-grimoire.appspot.com/o/07535b96-101a-44c3-90f5-4e14952df841%2F1677727942931315(1).jpg?alt=media&token=c6a36538-c22a-4124-9b6d-1139f7580a07',
//     'https://firebasestorage.googleapis.com/v0/b/tapestry-grimoire.appspot.com/o/13810198-b5bd-4039-9f3c-2c614cc1c449%2F1611973168973.png?alt=media&token=99d0b9cf-f56c-49a9-8acf-eeca59e2aea0',
//     'https://firebasestorage.googleapis.com/v0/b/tapestry-grimoire.appspot.com/o/16bf8ca9-61d5-45e9-b340-5c18a7f0ffa4%2F1606042230016.jpg?alt=media&token=425919d5-3720-43a0-8370-eb72cb22be0c',
//     'https://firebasestorage.googleapis.com/v0/b/tapestry-grimoire.appspot.com/o/1d63dbed-e7e9-4883-b850-e7fa914c59cd%2F1683003044911863(1).jpg?alt=media&token=0dfbfe32-cf6e-420c-8b3d-f08cf6a6b8eb',
//     'https://firebasestorage.googleapis.com/v0/b/tapestry-grimoire.appspot.com/o/1e4bdcf1-ed8e-4328-8a0a-2bb2aed1d396%2F1611352701747.jpg?alt=media&token=a7521118-3a3a-48b5-aebb-3aa3a305499c',
//     'https://firebasestorage.googleapis.com/v0/b/tapestry-grimoire.appspot.com/o/2a3649ba-4480-4991-a8c7-f7585494e8b1%2F1600105753450.jpg?alt=media&token=e3c502ff-6669-461f-9c9e-2c585ab11811',
//     'https://firebasestorage.googleapis.com/v0/b/tapestry-grimoire.appspot.com/o/2e00970e-5ddf-44ac-be1d-e72c0cfb4752%2F1600255495475.jpg?alt=media&token=5c214fcc-90b7-4904-8a5e-742a57e6f415',
//     'https://firebasestorage.googleapis.com/v0/b/tapestry-grimoire.appspot.com/o/33e64a77-ea4d-4cba-a938-cae36a25908b%2F1626085367741.jpg?alt=media&token=fef62cbc-8707-4bbd-81c3-31e8f724b1d0',
//     'https://firebasestorage.googleapis.com/v0/b/tapestry-grimoire.appspot.com/o/3615993c-277c-461e-9529-5b34a5c7b7a3%2F1612084845071.jpg?alt=media&token=a0bb88c6-81f4-4c03-bd82-59d25097edcd',
//     'https://firebasestorage.googleapis.com/v0/b/tapestry-grimoire.appspot.com/o/386260c0-f4da-4095-9bdb-8f383eee256d%2F1677192963360519.jpg?alt=media&token=3515bad3-67d4-408e-868c-9357cd490a8c',
// ];

function fetchWallpapers() {
    // Simulating fetching wallpapers from an API or database
    return wallpapers;
}

function changeWallpaper() {
    const wallpapers = fetchWallpapers();
    const randomWallpaperIndex = Math.floor(Math.random() * wallpapers.length);
    const randomWallpaper = wallpapers[randomWallpaperIndex];
    document.body.style.backgroundImage = `url(${randomWallpaper})`;
}

changeWallpaper()

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