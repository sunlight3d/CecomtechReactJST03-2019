/**
 * brew install postgresql
 * brew services start postgresql
 * brew services stop postgresql
 * psql postgres
 CREATE TABLE Products(productId SERIAL PRIMARY KEY,productName VARCHAR(200),year INTEGER,description TEXT);
 Display all users: \du
npm install express pg body-parser
 */
const express = require('express')
const bodyParser = require('body-parser')
const {
    getAllProducts,
    getProductById,
    insertProduct,
    updateProduct,
    deleteProduct
} = require('./Database/Product')

const app = express()
const PORT = 3001
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.get('/', (request, response) => {
    response.json({info: 'Api Backend with PostgreSQL'})
})
app.get('/products', getAllProducts)
app.post('/products/:productId', getProductById)
app.post('/products', insertProduct)
app.put('/products/:productId', updateProduct)
app.delete('/products/:productId', deleteProduct)

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`)
})
