const userModel = require('../models/userModel');
const addToCartModel = require('../models/cartProduct')

class CartService {
    static async addToCart(userId, productId) {
        const user = await userModel.findById(userId);
        if (!user) {
            return 0;
        }
        const product = await addToCartModel.findOne({ userId: userId, productId: productId });
        if (product) {
            return 1;
        }
        const newProduct = new addToCartModel({ userId: userId, productId   : productId, quantity: 1});
        await newProduct.save();
        return newProduct;
    }
    static async countAddToCartProduct(userId){
        const count = await addToCartModel.countDocuments({userId: userId});
        return count;
    }
    static async getCartProduct(userId){
        const cartProduct = await addToCartModel.find({userId: userId}).populate('productId');
        return cartProduct;
    }
    static async updateCartProductQuantity(userId,_id, qty){
        const updatedProduct = await addToCartModel.updateOne({_id,userId},{...(qty&&{quantity:qty})} );
        return updatedProduct;
    }
    static async deleteCartProduct(_id){
        const deletedProduct = await addToCartModel.findByIdAndDelete(_id);
        return deletedProduct;
    }
}

module.exports = CartService;