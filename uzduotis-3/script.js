" use strict";

function onClick() {
    let skaiciai = document.getElementById(`name`).value;

    let rez = document.getElementById(`Rezultatas`);

    const sveikas_skaicius = parseInt(skaiciai);

    if(isNaN(sveikas_skaicius ) || sveikas_skaicius === ''){
        rez.innerHTML = 'irasik skaiciu';
    } else {
        rez.innerHTML = (Math.pow(sveikas_skaicius, 2));
    }
}