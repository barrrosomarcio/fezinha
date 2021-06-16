const { MongoClient } = require('mongodb');
require('dotenv').config();


const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { MONGO_DB_URL, DB_NAME } = process.env;

const connection = async () => {
  return MongoClient.connect(MONGO_DB_URL,OPTIONS)
    .then(conn =>  conn.db(DB_NAME))
    .catch(err => {
      console.log('erroconn', err)
      process.exit(1);
    });
};

module.exports = connection;