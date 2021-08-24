const axios = require('axios');
var assert = require('assert');
var configFile = require('../config');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {

        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
        
        const config = {
            headers: { ContentType: 'application/json' }
        };
        
        const signinBodyRequest = {
           email: `${configFile.email.address}`,
           password: `${configFile.email.password}`,
        };
        
        function signIn(){
            return axios.post( 
                `${configFile.a.domain}`+`${configFile.a.signin}`,
                signinBodyRequest,
                config
              ).then(response => {
                return response
              })
              .catch(error => {
                console.log(error);
                return Promise.reject(error);
              });
        }
        
        const consoleLeagues = async () => {
            const leagues = await signIn();
            console.log(leagues.data.data.token);
          };
          
          consoleLeagues();
    });
  });
  describe('postgresl connect test', function() {
    it('insert data into table', function() {

      const Pool = require('pg').Pool
      const pool = new Pool({
        user: `${configFile.postgresql.username}`,
        host: `${configFile.postgresql.host}`,
        database: `${configFile.postgresql.database}`,
        password: `${configFile.postgresql.password}`,
        port: `${configFile.postgresql.port}`,
      });

const name = 'ledinhcuong';
const email = 'ledinhcuong99@gmail.com';
      pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
        if (error) {
          throw error
        }
        console.log(results);
    });
  });
});

describe('connect mongodb', async function() {
  it.only('connect mongodb', async function() {

    const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  `mongodb+srv://${configFile.mongodb.username}:${configFile.mongodb.password}@${configFile.mongodb.host}/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
console.log(uri);
async function run() {
  try {

    await client.connect();

    const database = client.db("sample_mflix");

    const movies = database.collection("movies");

    // create a document to be inserted

    const doc = { name: "Red", town: "kanto" };

    const result = await movies.insertOne(doc);

    console.log(

      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,

    );

  } finally {

    await client.close();

  }
}
run().catch(console.dir);

  });

});

});
