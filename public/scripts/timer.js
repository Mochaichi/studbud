//TIMER
//Converts time into hours, minutes, seconds, and milliseconds
function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    //Returns the converted minutes, seconds, milliseconds into a string
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}


let startTime;
let elapsedTime = 0;
let timerInterval;

//Displays the time by modifying innerHTML
function print(txt) {
    document.getElementById("display").innerHTML = txt;
}

//Start button function
function start() {
    
    //Subtracts the current time with 0
    startTime = Date.now() - elapsedTime;

    //Condition to reveal pause button
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    showButton("PAUSE");
}

//Function to reveal play button
function pause() {
    clearInterval(timerInterval);
    showButton("PLAY");
}

//Function to return the display back to 00:00:00 and display play button
function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("PLAY");
}

//Function to display button in a grid
function showButton(buttonKey) {
    let buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    let buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
}

//Event listeners for button clicking done by user
let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);