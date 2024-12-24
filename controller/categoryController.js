const service = require('../services')
const getCategoryWiseProduct = async (req,res)=>{
    try {
        const { category } = req.body || req?.query;
        const product = await service.productService.getCategoryWiseProduct(category);
        console.log('Get product by category successfully')
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Get product by category successfully',
            result: product,
        });
    } catch (error) {
        console.error('Error in getCategoryWiseProduct', error.message);
        console.log('--------------------------------------------------------------------------------------------------------------------')
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: 'Internal server error',
            result: error.message,
        });
    }
}

module.exports = {
    getCategoryWiseProduct,
}