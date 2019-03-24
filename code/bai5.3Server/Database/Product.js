import {pool} from './Database/Database'

const getAllProducts = (request, response) => {
    sql = 'SELECT * FROM Products ORDER BY productId ASC'
    pool.query(sql,(error, result) => {
        if (error) {
            throw error
        }
        response.status(200).json({
            result: 'ok',
            message: 'Query Product successfully',
            data: result.rows
        })
    }) 
}

const getProductById = (request, response) => {
    const {productId} = request.params
    pool.query('SELECT * FROM Products WHERE productId = $1', [productId], (error, result) => {
        if (error) {
            throw error
        }
        response.status(200).json({
            result: 'ok',
            message: 'Query Product successfully',
            data: result.rows
        })
    })
}

const insertProduct = (request, response) => {
    const {productName, year, description} = request.body
    const sql = "INSERT INTO Products(productName, year, description) VALUES($1, $2, $3)"
    pool.query(sql, [productName, year, description], (error, result) => {
        if(error) {
            throw error
        }
        response.status(201).json({
            result: 'ok',
            message: 'Insert successfully',
            data: {productId: result.insertId, productName, year, description}    
        })
    })
}
const updateProduct = (request, response) => {
    const {productId} = request.params
    const {productName, year, description} = request.body
    const sql = 'UPDATE Products SET productName=$1, year=$2, description=$3 WHERE productId=$4'
    pool.query(sql,[productName, year, description, productId], (error, result) => {
        if(error) {
            throw error
        }
        response.status(200).json({
            result: 'ok',
            message: 'Update data successfully',            
        })
    })
}

const deleteProduct = (request, response) => {
    const {productId} = req.body
    const sql = "DELETE FROM Products WHERE productId = $1"
    pool.query(sql, [productId], (error, result) => {
        if(error) {
            throw error
        }
        response.status(200).json({
            result: 'ok',
            message: 'Delete data successfully',            
        })        
    })
}
export {
    getAllProducts,
    getProductById,
    insertProduct,
    updateProduct,
    deleteProduct
}