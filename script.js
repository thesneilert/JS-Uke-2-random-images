function valgfrittIfElse(){
    let mynumber = Math.ceil(Math.random()* 3);
    console.log(mynumber)
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

function valgfrittNavn(elem) /* sender inn html element*/ {
    console.log(elem)
    elem.src = valgfrittIfElse();
}