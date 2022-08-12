
let scoreHomeEl = document.getElementById("score-home")
let scoreGuestEl = document.getElementById("score-guest")
let periodNumEl = document.getElementById("period-num-el")

let scoreHome = 0
let scoreGuest = 0
let quarter = 1

// ==== HOME ====
function addOneHome() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
}   

function addTwoHome() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
}

function addThreeHome() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
}

function minusOneHome() {
    scoreHome -= 1
    scoreHomeEl.textContent = scoreHome
}

// ==== GUEST ====

function addOneGuest() {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
}

function addTwoGuest() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
}

function addThreeGuest() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest

}

function minusOneGuest() {
    scoreGuest -= 1
    scoreGuestEl.textContent = scoreGuest
}

// ==== PERIOD ====

function addOne() {
    quarter += 1
    periodNumEl.textContent = quarter
}

function minusOnePeriod() {
    quarter -= 1
    periodNumEl.textContent = quarter
}

// ==== NEW GAME ====

function newGame() {
    scoreGuest = 0
    scoreHome = 0
    quarter = 1
    scoreHomeEl.textContent = scoreGuest
    scoreGuestEl.textContent = scoreHome
    periodNumEl.textContent = quarter

}



