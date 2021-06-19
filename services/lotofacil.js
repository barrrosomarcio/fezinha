const lotofacil = require('../model/lotofacil');

const getStats = async () => {
  const stats = [];
  const topNumbers = await lotofacil.getNumbersQuantities();
  for (let i = 0; i < topNumbers.length; i+= 1) {
    const { _id, qtde } = topNumbers[i];
    const acompanhado = await lotofacil.getByNumber(_id);
    stats.push({
      [_id]: qtde,
      acompanhado,
    }) ;
  }
  return stats;
};

module.exports = {
  getStats,
}