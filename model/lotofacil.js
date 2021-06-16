const connection = require('../connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  const output = null;
  await connection()
    .then((db) => db.collection('lotofacil').find())
    .then(result => {
      output = result;
    });
  return output;
};
const getNumbersQuantities = async () => {
  let top = null;
  await connection()
  .then((db) => db.collection('lotofacil').aggregate([
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
  ]).toArray())
  .then(result => {
    top = result;
  })
  return top;
};
const getByNumber = async (dezena) => {
  let drawn = null;
  await connection()
  .then((db) => db.collection('lotofacil').aggregate([
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
  ]).toArray())
  .then(result => {
    drawn = result;
  })
  return drawn;
} 

module.exports = {
  getNumbersQuantities,
  getByNumber,
}