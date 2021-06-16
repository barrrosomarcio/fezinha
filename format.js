const { updateData } = require('../model/lotofacil');
const { data } = require('../data');

const formatData =  () => {
  const output = [];
  data.forEach(sorteio => {
    output.push({
      concurso: sorteio.Concurso,
      data_sorteio: sorteio["Data Sorteio"],
      dezenas: [ sorteio.Bola1, sorteio.Bola2, sorteio.Bola3, sorteio.Bola4, sorteio.Bola5, sorteio.Bola6, sorteio.Bola7, sorteio.Bola8, sorteio.Bola9, sorteio.Bola10, sorteio.Bola11, sorteio.Bola12, sorteio.Bola13, sorteio.Bola14, sorteio.Bola15],
      arrecadacao_total: sorteio["Arrecadacao_Total"],
      ganhadores:{
        15: sorteio["Ganhadores_15_N??meros"],
        14: sorteio["Ganhadores_14_N�meros"],
        13: sorteio["Ganhadores_13_N�meros"],
        12: sorteio["Ganhadores_12_N�meros"],
        11: sorteio["Ganhadores_11_N�meros"]
      },
      valor_rateio: {
        15: sorteio["Valor_Rateio_15_N�meros"],
        14: sorteio["Valor_Rateio_14_N??meros"],
        13: sorteio["Valor_Rateio_13_N�meros"],
        12: sorteio["Valor_Rateio_12_N�meros"],
        11: sorteio["Valor_Rateio_11_N�meros"]
      },
      acumulado:sorteio["Acumulado_15_N�meros"],
      estimativa_premio: sorteio["Estimativa_Premio"],
      acumulado_especial:sorteio["Valor_Acumulado_Especial"]
    });
  });
  return output;
};

module.exports = {
  formatData,
}