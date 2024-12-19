import {
    loadWelcome,
    getPlayerName,
    selectCup1,
    selectCup2,
    selectCup3,
    resetFunction
} from '/src/js/functions.js';

let formPlayerName = document.getElementById("start-form");
const cupOneDom = document.querySelector("#cup1");
const cupTwoDom = document.querySelector("#cup2");
const cupThreeDom = document.querySelector("#cup3");
const resetButton = document.querySelector(".resetButon");



document.addEventListener("DOMContentLoaded", loadWelcome);
formPlayerName.addEventListener("submit", getPlayerName);


cupOneDom.addEventListener("click", selectCup1);
cupTwoDom.addEventListener("click", selectCup2);
cupThreeDom.addEventListener("click", selectCup3);
resetButton.addEventListener("click", resetFunction);