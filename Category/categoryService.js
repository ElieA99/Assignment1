const Category = require("./categoryModel");

async function addCategory(name, description) {
   try {    
     return await Category.create({ name, description });    
   } catch (error) {
      console.log('Error ADDING THE CATEGORY:', error);
   }
};

module.exports = { addCategory }; 