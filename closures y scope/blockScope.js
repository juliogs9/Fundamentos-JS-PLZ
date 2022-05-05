const fruits = () => {
  if (true) {
    var fruits1 = "apple";
    let fruits2 = "banana";
    const fruits3 = "kiwi";
  }

  console.log(fruits1); // ESTA VARIABLE SI SERA IMPRESA
  console.log(fruits2); // NO SE IMPRIMIRA
  console.log(fruits3); // NO SE IMPRIMIRA
};

fruits();

// LA VARIABLE DECLARADA CON VAR SERA IMPRESA EN CONSOLA YA QUE SU ESCOPE AUNQUE ES LOCAL , ABARCA TODO EL SCOPE DE LA FUNCION ASI QUE PUEDO ACCEDER A SU VALOR

// LAS VARIABLES DECLARADAS CON LET Y CONST SU SCOPE ES LIMITADA POR LAS LLAVES , ES DECIR PODRE ACCEDER A SU VALOR DENTRO DEL BLOQUE DE CODIGO QUE ESTA DENTRO DE LAS LLAVES SU SCOPE ES LIMITADA POR EL BLOQUE DONDE SE ENCUENTRAN DENTRO {} POR ELLO EL CONSOLE DE ESTAS VARAIBLES MARACAR ERROR.

// >>>> AUNQUE DENTRO DE UNA FUNCION YA EXISTE UN SCOPE LOCAL , DENTR0O DE LA MISMA FUNCION PUEDE CREARSE UN SCOPE NUEVO LOCAL DEVIDO A UN BLOQUE DE CODIGO >>> {} <<< COMO UNA CONDICIONAL Y LAS VARIABLES DECLARADAS DENTRO DE LA CONDICIONAL SOLO SERAN ACCECIBLES DENTRO DE LA CONDICIONAL A ESEPCION DE VAR QUE TIENE UN ALCANCE MAYOR.

/*________________________________________ EJEMPLO DE SCOPE DE BLOQUE ______________________________________

__________________________________________________________________________________________________________  */

let x = 1;
{
  let x = 2;
  console.log(x); // ESTE CONSOLE IMPRIME EL VALOR DE X QUE ESTA DENTRO DE LAS LLAVES
}

console.log(x); // ESTE CONSOLE IMPRIME EL VALOR DE X QUE ESTA FUERA DE LAS LLAVES

var y = 1;
{
  var y = 2;
  console.log(y); // ESTE CONSOLE IMPRIME EL VALOR DE Y QUE ESTA DENTRO DE LAS LLAVES
}
console.log(y); // ESTE CONSOLE IMPRIME EL VALOR DE Y QUE ESTA DENTRO DE LAS LLAVES >> SE SOBRE ESCRIBE

// >>>>> TENER CUIADDO CON VAR !!!!!!!!!!!!

/*__________________________________________________ EJEMPLO 2 SCOPE ____________________________________



___________________________________________________________________________________________________________ */

const anotherFunction = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i); // IMPRIMIRA EL ULTIMO VALOR DE I 10 VECES
    }, 1000);
  }
};

anotherFunction();

anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i); // REALIZARA LAS ITERACIONES CORRECTAMENTE
    }, 1000);
  }
};

anotherFunction();

// TENER CUIDADO CON LAS DECLARACIONES DE LAS VARIABLES
