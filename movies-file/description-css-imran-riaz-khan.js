
// bentoJS coding
let clickCountmovieCard = 0;
let timerActive = false; // timer ko check karne ke liye flag

function resetClicks() {
    clickCountmovieCard = 0;
    timerActive = false; // reset karte waqt timer ko bhi stop karna hai
}

function startTimer() {
    timerActive = true; // timer shuru hone par flag ko true karenge
    setTimeout(() => {
        resetClicks(); // 15 seconds ke baad clicks reset ho jayenge
    }, 15000); // 15000ms = 15 seconds
}

function handlemovieCardClick() {
    clickCountmovieCard++;

    if (clickCountmovieCard === 1) {
        window.open('https://www.cpmrevenuegate.com/i5w7tfr9r0?key=fce180a281beb7fedb4e1a0fb0558828', '_blank');
    } else if (clickCountmovieCard === 2) {
        window.open('', '_blank');
        if (!timerActive) {
            startTimer(); // timer sirf 2nd click ke baad shuru hoga
        }
    } else if (clickCountmovieCard > 2 && timerActive) {
        window.open('', '_blank'); // 2nd click ke baad sirf doosra URL open hoga
    }
}

document.getElementById('movieCard').addEventListener('click', handlemovieCardClick);
