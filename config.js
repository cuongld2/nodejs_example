
require('dotenv').config()
var configFile = {};

configFile.mongodb = {};
configFile.email={};
configFile.postgresql={};
configFile.a={};


configFile.mongodb.host = process.env.MONGO_HOST || 'host';
configFile.mongodb.username = process.env.MONGO_USERNAME || 'username';
configFile.mongodb.password = process.env.MONGO_PASSWORD || 'password';
 
configFile.email.address=process.env.EMAIL_ADDRESS || 'email_address';
configFile.email.password=process.env.EMAIL_PASSWORD || 'email_password';

configFile.postgresql.host=process.env.POSTGRESQL_HOST || 'postgresql_host';
configFile.postgresql.database=process.env.POSTGRESQL_DATABASE || 'postgresql_database';
configFile.postgresql.username=process.env.POSTGRESQL_USERNAME || 'postgresql_username';
configFile.postgresql.password=process.env.POSTGRESQL_PASSWORD || 'postgresql_password';
configFile.postgresql.port=process.env.POSTGRESQL_PORT || 'postgresql_port';

configFile.a.domain=process.env.A_DOMAIN || 'a_domain';
configFile.a.signin=process.env.A_SIGNIN || 'a_signin';

module.exports = configFile;