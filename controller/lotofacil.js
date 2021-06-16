const lotofacilService = require('../services/lotofacil');

const getStats = async (req, res) => {
  const stats = await lotofacilService.getStats();
  return res.status(200).send(stats);
}

module.exports = {
  getStats,
}