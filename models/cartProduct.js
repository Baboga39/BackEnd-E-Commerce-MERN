const mongoose = require('mongoose');

const addToCartModel = mongoose.Schema({
    productId: {
        ref: 'Product',
        type: mongoose.Schema.Types.ObjectId,
    },
    quantity: Number,
    userId: String,
}, {
    timestamps: true
}
)

module.exports = mongoose.model('addToCart', addToCartModel);