const connection = require('../connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  await connection()
    .then((db) => {
      return db.collection('lotofacil').find()});
    
};
const getNumbersQuantities = async () => {
  await connection()
  .then((db) => {
    return db.collection('lotofacil').aggregate([
      {
        $unwind: "$dezenas"
      },
      {
        $group: {
          _id: "$dezenas",
          qtde: { $sum: 1}
        }
      },
      {
        $sort: {qtde: -1}
      }
    ]).toArray()});
};
const getByNumber = async (dezena) => {
  await connection()
  .then((db) => {
    return db.collection('lotofacil').aggregate([
      {
        $match: {
          dezenas: dezena
        }
      },
      {
        $unwind: "$dezenas"
      },
      {
        $match: {
          dezenas: { $ne: dezena}
        }
      },
      {
        $group: {
          _id: "$dezenas",
          qtde: { $sum: 1}
        }
      },
      {
        $sort: {qtde: -1}
      },
      {
        $project: {
          _id: 0,
          drawn: "$_id",
          quantity: "$qtde" 
        }
      },
      {
        $limit: 14
      }
    ]).toArray()});
} 

module.exports = {
  getNumbersQuantities,
  getByNumber,
}