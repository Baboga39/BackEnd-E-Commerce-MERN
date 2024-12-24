const userModel = require('../models/userModel');
const addToCartModel = require('../models/cartProduct')

class UserService {
    static async getAllUsers() {
        const users = await userModel.find({});
        return users;
    }
    static async updateUser(userId,payload){
        const updatedUser = await userModel.findByIdAndUpdate(userId, payload, {new: true});
        return updatedUser;
    }
}

module.exports = UserService;