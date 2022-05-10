anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i); // REALIZARA LAS ITERACIONES CORRECTAMENTE
    }, 1000);
  }
};

anotherFunction();

// TENER CUIDADO CON LAS DECLARACIONES DE LAS VARIABLES

// EL SCOPE Y CLOSURES TRABAJAN EN CONJUNTO PARA OPTIMIZAR EL PROGRAMA >>>> TENER CUIDADO CON VAR
