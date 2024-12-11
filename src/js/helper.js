//Esta funcion printa la variable que se le pasa
function printVar(parameter){
    // return console.log(parameter);
    // return console.info(parameter);
    return console.table(parameter);

 }
 
 printVar("asd");

//Esta funcion printa el TIPO de variable que se le pasa
 function typeVar(parameter){
    return console.log(typeof parameter);
 }
 
 typeVar("asd")