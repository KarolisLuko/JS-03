" use strict";

function onClick() {
    let skaiciai = document.getElementById(`name`).value;

    let rez = document.getElementById(`Rezultatas`);

     rez.innerHTML = (Math.pow(skaiciai));
}