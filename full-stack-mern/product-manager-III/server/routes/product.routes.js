const ProductController = require('../controllers/product.controller');
module.exports = (app) => {
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/products/', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getOneProduct);
    app.put('/api/products/edit/:id', ProductController.editOneProduct);
    app.delete('/api/products/delete/:id', ProductController.deleteProduct);
}