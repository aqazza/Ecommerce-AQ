// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)
Product.belongtoMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },

  as: product_tag,
});
// Tags belongToMany Products (through ProductTag)
Tag.belongtoMany(Product, {
  through: {
    model: ProductTag,
    unique: false, // can have many of the same tags
  },

  as: product_tag,
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
