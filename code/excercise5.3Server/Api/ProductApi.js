/**
 * 
 CREATE TABLE Products(productId SERIAL PRIMARY KEY, productName VARCHAR(200), description TEXT);
 */
const {pool} = require('../Database')

const getProducts = (request, response) => {    
    //console.log(`keys = ${JSON.stringify(Object.keys(request))}`)
    const {limit=100, page=0, productId} = request.query
    response.json({
        result: "ok",
        message: `limit: ${limit}, page=${page}, productId=${productId}`,
    })
}
const insertProduct = (request, response) => {
    const {productName, year, description} = request.body
    const sql = 'INSERT INTO Products(productName, year, description) VALUES($1, $2, $3)'
    pool.query(sql,[productName, year, description], (error, result) => {        
        if (error) {            
            console.log(`error = ${error}, result = ${result}`)
            response.json({
                result: 'failed',
                message: `Error = ${error}`
            })            
            return
        } else {
            response.status(200).json({
                result: 'ok',
                message: 'Insert Product successfully',
                data: result.rows
            })
        }        
    })     
}
const updateProduct = (request, response) => {
    const {productName, year, description} = request.body
    response.json({
        result: "ok",
        message: `Update ok, params = ${productName}, ${year}, ${description}`,
    })
}
const deleteProduct = (request, response) => {
    const {productName, year, description} = request.body
    response.json({
        result: "ok",
        message: `Delete ok, params = ${productName}, ${year}, ${description}`,
    })
}
module.exports = {
    getProducts,
    insertProduct,
    updateProduct, 
    deleteProduct
}