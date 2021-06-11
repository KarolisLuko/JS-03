" use strict";

function onClick() {
    let skaiciai = document.getElementById(`name`).value;
    let rez = document.getElementById(`Rezultatas`);

    const pirmas_skaicius_string = skaiciai[0];
    let a = parseInt(skaiciai[0]);
    let b = parseInt(skaiciai[1]);
    let c = parseInt(skaiciai[2]);
    
     
     rez.innerHTML = a+b+c;

};

