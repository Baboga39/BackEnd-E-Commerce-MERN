const productModel = require('../models/productModel')

const uploadProduct = async (data) =>{
  const product = new productModel(data);
  return await product.save();
}

const getAllProduct = async () =>{
  const products = await productModel.find({});
  return products;
}
const updateProduct = async (data) =>{
  const product = await productModel.findByIdAndUpdate(data._id, data, {new: true});
  return product;
}
const getAllCategories = async () =>{
  const categories = await productModel.distinct('category');

  const productByCategory = [];
  for(const category of categories){
    const product = await productModel.findOne({category: category});
    if(product){
      productByCategory.push(product);
    }
  }
  return productByCategory;
}

const getCategoryWiseProduct = async (category) =>{
  const product = await productModel.find({category: category});
  return product;
}
const getProductDetails = async (product) =>{
  const productDetail = await productModel.findById(product);
  return productDetail;
}
const searchProducts = async (query) =>{
  
  const cleanQuery = query.startsWith('?q=') ? query.replace('?q=', '') : query;

  console.log(cleanQuery); 

  const regex = new RegExp(cleanQuery, 'i','g');

  const product = await productModel.find({
    "$or": [
      {
        productName: regex
      },
      {
        category: regex
      }
    ]
  })
  return product;
}

const filterProduct = async (categories)=>{
  const product = await productModel.find({
    category: { $in: categories }
  });
  return product;
}


module.exports = {
    uploadProduct,
    getAllProduct,
    updateProduct,
    getAllCategories,
    getCategoryWiseProduct,
    getProductDetails,
    filterProduct,
    searchProducts}