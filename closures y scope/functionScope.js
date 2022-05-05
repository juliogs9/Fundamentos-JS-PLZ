const fruits = () => {
  var fruit = "apple";
  console.log(fruit);
};

fruits();
console.log(fruit); // ESTE CONSOLE MARCARA ERROR YA QUE LA VARIABLE ESTA EN UN SCOPE LOCAL ES DECIR EN EL SCOPE DE LA FUNCION POR ELLO NO PUEDO ACCEDER A SU VALOR Y MARCARA ERROR

/*________________________________ _____________ SCOPE LOCAL _______________________________________________

>>> DENTRO DE UNA FUNCION
___________________________________________________________________________________________________________*/

const anotherFunction = () => {
  var x = 1;
  var x = 2; // LAS VARIABLES DECLARADAS CON VAR PUEDEN SER REASIGNADAS !!! TENER CUIDADO CON ELLO ¡¡¡¡¡
  let y = 1;
  let y = 2; // LAS VARIABLES CON LET NO PUEDEN SER REASIGNADAS POR ELLO MARCA ERROR
  console.log(x); // ESTE CONSOLE SI SE IMPRIMIRA YA QUE SE SOBRE ESCRIBE EL VALOR DE X
  console.log(y); // ESTE CONSOLE MARCARA ERROR YA QUE Y YA ESTABA DECLARADA ANTES Y NO PUEDE SER SOBREESCRITA
};

// 1- EVIAR USAR VAR PARA NO TENER VARIABLES SOBREESCRITAS
// 2- USAR >> LET O >> CONST PARA LAS VARIABLES
