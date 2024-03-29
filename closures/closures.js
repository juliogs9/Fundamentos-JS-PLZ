// __________________________________ EJEMPLOS DE CLOSURES _______________________

const contadorMonedas = () => {
  var cochinito = 10;
  const ahorro = (domingos) => {
    cochinito += domingos;
    console.log(cochinito);
  };
  return ahorro;
};

let conteoAhorro = contadorMonedas();

conteoAhorro(15);
conteoAhorro(5);

const moneyBox = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    // ESTA NUEVA FUNCION RECUERDA LA VARIBLE ANTES DECLARADA >> ARRIBA
    saveCoins += coins;
    console.log(saveCoins);
  };
  return countCoins;
};

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(10);
myMoneyBox(6);
