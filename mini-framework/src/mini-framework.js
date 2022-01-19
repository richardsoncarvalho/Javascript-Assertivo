const assert = require("assert");

const teste = (titulo, funcaoTeste) => {
  try {
    funcaoTeste();
    console.log(`${titulo} Teste passou!`);
  } catch (err) {
    console.log(titulo + " - " + err.message);
  }
};

const verifiqueQue = (valor) => {
  const assercoes = {
    ehExatamenteIgualA(esperado) {
      assert.strictEqual(valor, esperado);
    },
  };

  return assercoes;
};

module.exports = {
  teste,
  verifiqueQue,
};
