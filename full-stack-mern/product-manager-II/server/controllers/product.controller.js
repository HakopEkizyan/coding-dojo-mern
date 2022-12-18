const { response } = require('express');
const Product = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    const {title, price, description} = req.body;
    Product.create({ title, price, description })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(products => {
            console.log(products);
            res.json(products);
        })
        .catch((err) => {
            console.log(err)
            res.json(err)
        })
}

module.exports.getOneProduct = (req, res) => {
    Product.findById(req.params.id)
        .then((product) => {
            console.log(product)
            res.json(product)
        })
        .catch((err) => {
            console.log(err)
        })
}