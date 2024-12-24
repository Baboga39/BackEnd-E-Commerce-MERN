const express = require('express');
const controller = require('../controller')
const router = express.Router();

router.post('/product-details',controller.prouductController.getProdcuctDetails)
router.post('/searchProduct',controller.prouductController.searchProducts)
router.post('/filterProduct',controller.prouductController.filterProduct)

module.exports = router;