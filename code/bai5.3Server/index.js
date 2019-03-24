/**
 * brew install postgresql
 * brew services start postgresql
 * brew services stop postgresql
 CREATE TABLE Products(
     productId SERIAL PRIMARY KEY,
     productName VARCHAR(200),
     year INTEGER,
     description TEXT,
     )
npm install express pg body-parser
 */
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3001
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.get('/', (request, response) => {
    response.json({info: 'Api Backend with PostgreSQL'})
})
app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`)
})
