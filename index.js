let homeScoreEl = document.getElementById("home-score-el");
let guestScoreEl = document.getElementById("guest-score-el");

let homeScore = guestScore = 0;
function home1() {
    homeScoreEl.textContent = Number(homeScoreEl.textContent) + 1;
    highlightLeading();
}

function home2() {
    homeScoreEl.textContent = Number(homeScoreEl.textContent) + 2;
    highlightLeading();
}

function home3() {
    homeScoreEl.textContent = Number(homeScoreEl.textContent) + 3;
    highlightLeading();
}

function guest1() {
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 1;
    highlightLeading();
}

function guest2() {
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 2;
    highlightLeading();
}

function guest3() {
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 3;
    highlightLeading();
}

let homeScoreBoard = document.getElementById("home-board");
let guestScoreBoard = document.getElementById("guest-board");

let leadingUrl = "url(\"https://media.giphy.com/media/xThtavauz3DKybut8s/giphy.gif\")";

function highlightLeading() {
    if (Number(homeScoreEl.textContent) > Number(guestScoreEl.textContent)) {
        homeScoreBoard.style.backgroundImage = leadingUrl;
        guestScoreBoard.style.backgroundImage = "none";
    } else if (Number(homeScoreEl.textContent) < Number(guestScoreEl.textContent)) {
         guestScoreBoard.style.backgroundImage = leadingUrl;
        homeScoreBoard.style.backgroundImage = "none";
    } else {
        homeScoreBoard.style.backgroundImage = "none";
        guestScoreBoard.style.backgroundImage = "none";
    }
}

function newGame() {
   homeScoreEl.textContent = 0;
   guestScoreEl.textContent = 0; 
   highlightLeading();
}

newGame();

