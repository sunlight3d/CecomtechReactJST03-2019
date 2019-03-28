/**
 * 
 CREATE TABLE Products(productId SERIAL PRIMARY KEY, year INTEGER, productName VARCHAR(200), description TEXT);
 */
const {pool} = require('../Database')

const getProducts = async (request, response) => {    
    const {limit, page} = request.query
    const sql = 'SELECT * FROM Products LIMIT $1 OFFSET $2'
    try {
        let result = await pool.query(sql,[limit, page*limit])
        response.status(200).json({
            result: 'ok',
            message: 'Query Product successfully',                
            products: result.rows
        })
    } catch(error) {
        response.json({
            result: 'failed',
            message: `Error = ${error}`
        })     
    } 

}
const insertProduct = async (request, response) => {
    const {productName, year, description} = request.body
    const sql = 'INSERT INTO Products(productName, year, description) VALUES($1, $2, $3) returning *'
    try {
        let result = await pool.query(sql,[productName, year, description])
        response.status(200).json({
            result: 'ok',
            message: 'Insert Product successfully',                
            data: result.rows[0]
        })
    } catch(error) {
        response.json({
            result: 'failed',
            message: `Error = ${error}`
        })     
    } 
}
const updateProduct = async (request, response) => {
    const {productId, productName, year, description} = request.body
    const sql = 'UPDATE Products SET productName=$1, year=$2, description=$3 WHERE productId=$4'
    try {
        let result = await pool.query(sql,[productName, year, description, productId])
        response.status(200).json({
            result: 'ok',
            message: 'Update Product successfully',                
        })
    } catch(error) {
        response.json({
            result: 'failed',
            message: `Error = ${error}`
        })     
    }
}
const deleteProduct = async (request, response) => {
    const {productId} = request.body
    const sql = 'DELETE FROM Products WHERE productId=$1'
    try {
        let result = await pool.query(sql,[productId])
        response.status(200).json({
            result: 'ok',
            message: 'Delete Product successfully',                
        })
    } catch(error) {
        response.json({
            result: 'failed',
            message: `Error = ${error}`
        })     
    }
}
module.exports = {
    getProducts,
    insertProduct,
    updateProduct, 
    deleteProduct
}