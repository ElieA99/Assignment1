const Category = require('./categoryModel');
const User = require('../User/userModel');

//create new category function
async function createCategory(req, res) {
    try {
        const user = await User.findOne({ _id });
        const { name, description } = req.body;

        const newCat = new Category({ name, description, updatedBy: user._id, createdBy: user._id, });
        await newCat.save();
        return res.status(200).json({ message: 'New Category Added !!!' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

//function to get all category available
async function getCategory(req, res) {
    try {
        const categories = await Category.find({});
        //console.log('CAT:',categories)`    
        return res.status(200).json({ message: 'Categories Retrived', data: categories });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


module.exports = { createCategory, getCategory }