const { teste, verifiqueQue } = require("./mini-framework");

const somaHorasExtras = (salario, valorHorasExtras) => {
  return salario + valorHorasExtras;
};

const calculaDesconto = (salario, descontos) => {
  return salario - descontos;
};

teste("somaHorasExtras", () => {
  const esperado = 10;
  const retornado = somaHorasExtras(5, 5);

  verifiqueQue(esperado).ehExatamenteIgualA(retornado);
});

teste("calculaDesconto", () => {
  const esperado = 5;
  const retornado = calculaDesconto(10, 5);

  verifiqueQue(esperado).ehExatamenteIgualA(retornado);
});
