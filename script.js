"use strict";

// 1. documnet , ho to get i[punt text by ID]
// 2. how to set/change div by id
//  

function onClick() {
    let secunds = document.getElementById(`name`).value;
    let rez = document.getElementById(`Rezultatas`);


    var measuredTime = new Date(null);
    measuredTime.setSeconds(secunds);

    rez.innerHTML = measuredTime.toISOString().substr(11, 8);


 
}

