/*
npm install express body-parser
npm install -g nodemon

Request which has "query":
http://servername:3001/products?limit=10&page=0
In server:
request.query.limit, request.query.page
Request which has "params":
http://servername:3001/product/5
request.params.id
Request POST, PUT, DELETE:
http://servername:3001/products
request.body
 */
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {getProducts, insertProduct, updateProduct, deleteProduct} = require('./Api/ProductApi')

app.use(bodyParser.urlencoded({extended: true}))
//http://localhost:3001/
app.get('/', (request, response) => {
    response.json({info: 'Api Backend with PostgreSQL'})
})
//Select all products, with filter
//Query
//http://localhost:3001/products?limit=10&page=0
//Params
//http://localhost:3001/products?/10

//app.get('/products/:productId', getProducts) //params http://servername:3001/products/10
app.get('/products', getProducts) //query => http://servername:3001/products?limit=10&page=0
//Insert new Product = POST
app.post('/products', insertProduct)
app.put('/products', updateProduct)
app.delete('/products', deleteProduct)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`)
})