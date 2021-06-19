// COMPARADOR DE JOGOS
const game = ["13", "10", "20", "11", "24", "14", "25", "3", "4", "19", "17", "18", "1", "5", "2"];
use('fezinha');
// db.lotofacil.aggregate([
//   {
//     $group: {
//       _id: "$dezenas",
//       total: { $sum: 1}
//     }
//   }, {
//     $match: {
//       total: { $gt: 1}
//     }
//   }
// ])
db.lotofacil.aggregate([
  {
    $project: {
      acertosTeste: {
        $setIntersection: [game, "$dezenas"]
      }
    }
  },
  {
    $project: {
      _id: 0,
      numeroAcertos: {
        $size: "$acertosTeste"
      }
    }
  },
  {
    $match: {numeroAcertos: {$gt: 10}}
  },
  {
    $group: {
      _id: "$numeroAcertos",
      total: {$sum: 1}
    }
  }
]);