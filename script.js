let lastRandomNumber;

function valgfrittIfElse(){
// Genererer tilfeldig nummer
    let mynumber = Math.ceil(Math.random()* 5);
// Forsetter å generere nytt nummer til det er anderledes en forrige nummer
    while (mynumber === lastRandomNumber) {
        mynumber = Math.ceil(Math.random()* 5);
    }

// Beholder generert nummer til neste gang
    lastRandomNumber = mynumber;
        if(mynumber === 1){
        return './img/1.jpg';
    } 
        else if(mynumber === 2) {
        return './img/2.jpg';
    }
        else if(mynumber === 3) {
        return './img/3.jpg';
    }
        else if(mynumber === 4) {
        return './img/4.jpg';
    }
        else {
        return './img/5.jpg';
    }
}

// sender inn bildet til html img element
function valgfrittNavn(elem) {
    elem.src = valgfrittIfElse();
}


// console.log(mynumber)
// console.log(elem)