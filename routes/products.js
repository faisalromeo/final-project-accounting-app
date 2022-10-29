const express = require('express')
const router = express.Router()
const db = require('../config/mysql')
router.use(express.json())

//Getting list of products
router.get('/', (req, res) => {
    let sql = `SELECT * FROM products;`
    db.query(sql, function (err, products) {
    if (err) throw err
    res.status(200).json(products)
    })
})

// Create an product
router.post('/', (req, res) => {
    let product_name = req.body.productName
    let product_code = req.body.productCode
    let barcode = req.body.barcode
    let category = req.body.category
    let selling_price = req.body.sellingPrice
    let cost_of_price = req.body.costOfPrice
    let quantity = req.body.quantity
    let sql =  `INSERT INTO products (product_name, product_code, barcode, category, selling_price, cost_of_price, quantity)
                VALUES ("${product_name}", "${product_code}", "${barcode}", "${category}", ${selling_price}, ${cost_of_price}, ${quantity});`
    db.query(sql, (err, products)=>{
        if(err) throw err
        res.status(200).json({message: "Product added successfully!"})
    })
})






module.exports = router