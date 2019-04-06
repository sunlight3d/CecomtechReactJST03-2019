/**
 CREATE USER postgres SUPERUSER;
 CREATE DATABASE postgres WITH OWNER postgres;
 DROP TABLE products;
 CREATE TABLE products(
    productId SERIAL PRIMARY KEY,
    productName VARCHAR(200),
    year INTEGER,
    description TEXT    
 );
 */
const {Pool} = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432
})
module.exports = {
    pool
}
