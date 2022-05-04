/* ___________________________________________________________________________________

AL INICIO DEL PROGRAMA DECLARO LAS VARIABLES EN EL AMBITO O SCOPE GLOBAL , ESTO PERMITE QUE SEAN ACCECSIBLES EN TODO EL PROGRAMA YA QUE SE ENCUENTRAN EN UN AMBITO GENERAL POR ASI DECIRLO

___________________________________________________________________________________*/

var hello = "hello";
let heloWorld = "hello World";
const hello2 = "hellow World !!!!";

// lAS VARIABLES SON ACCECSIBLES AL LA SIGUIENTE FUNCION ==>>
// ESTA FUNCION TIENE ACCESO A LAS VARIABLES POR ENDE PUEDE IMPIRMIR LA INFORMACION DE LAS MISMAS

const anotherFunction = () => {
  console.log(hello);
  console.log(heloWorld);
  console.log(hello2);
};

anotherFunction();

// >>>> TENER CUIDADO AL UTILIZAR LA PALABRA VAR YA QUE ESTA PUEDE SER REASIGNADA Y PUEDE CAUSAR CONFLICTOS EN EL PROGRAMA >>>>>>>>>> IMPORTANTE !!!!!1

//______________________  >>>>>>>>>>>>> EVITAR LAS SIGUIENTES MALAS PRACTICAS >>>>>>>>>>>>> ______________

// 1- DECLARAR UNA VARIABLE  >>  SIN  << LAS PALABRAS RECERBADAS ( VAR ) ( LET ) ( CONST ) MALA PRACTICA

// SE PUEDE ACCEDER A LA VARIABLE DECLARADA DENTRO DE LA FUNCION POR LA MALA PRACTICA Y SE ESPERARIA QUE SOLO FUNCIONARA DENTRO DEL SCOPE LOCAL NO DEL SCOPE GLOBAL

const otraFunction = () => {
  globalVar = " soy global"; // ESTO ESTA MAL !!!!!! >>>>>>
};

otraFunction();
console.log(globalVar);

// 2 - DECLARAR DOS VECES UNA VARIABLE
// LA VARIABLE DEBERIA TENER UN SCOPE LOCAL PERO SE VUELVE UNA VARIABLE DE SCOPE GLOBAL POR LA MALA PRACTICA DE NOMBRAR UNA VARIABLE TRA OTRA >>> EVITARLO !!!!!!!

const otraFuncion = () => {
  var localVar = (globalVar2 = "im Global"); // ESTO ESTA MAL !!!!!!!! >>>>>
};

otraFuncion();
console.log(globalVar2);
