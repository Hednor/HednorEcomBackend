# 🛒 Hednor eCommerce Backend (NestJS + GraphQL + MongoDB)

This is a powerful and flexible backend API built with [NestJS](https://nestjs.com/), [GraphQL](https://graphql.org/), and [MongoDB](https://www.mongodb.com/) for an eCommerce application.

---

## 🚀 Features

- 🧩 Modular structure using NestJS
- 📦 MongoDB (with Mongoose) for data storage
- 🧠 GraphQL API with CRUD support
- 📁 Product, Category, SubCategory management
- 📷 Image uploads (optional: Cloudinary/S3)
- 📊 Dynamic filters (brand, price, etc.)
- 🔐 Auth ready (JWT/Guards - optional setup)

---

## 📦 Tech Stack

- **Backend**: NestJS
- **Database**: MongoDB with Mongoose
- **API**: GraphQL (Code-first)
- **Others**: TypeScript, npm

---

## 🛠️ Installation

1. Clone the repo:

```bash
git clone https://github.com/yourusername/hednor-ecom-backend.git
cd hednor-ecom-backend

## Satart Your Project
npm run start:dev

## use this url in your Browser 
http://localhost:3000/graphql

##fatch this APIs

## Query For ProductCategory

Create ProductCategory               
mutation {
  createProductCategory(input: {
    name: "Electronics",
    image: "https://example.com/electronics.jpg",
    description: "All electronic devices"
  }) {
    _id
    name
  }
}

 Get All ProductCategories
query {
  findAllProductCategories {
    _id
    name
    image
    description
  }
}

Get One ProductCategory by ID
query {
  findProductCategory(id: "YOUR_CATEGORY_ID") {
    _id
    name
    image
    description
  }
}

Update ProductCategory
mutation {
  updateProductCategory(input: {
    id: "YOUR_CATEGORY_ID",
    name: "Updated Electronics",
    image: "https://example.com/updated.jpg",
    description: "Updated description"
  }) {
    _id
    name
  }
}


Delete ProductCategory
mutation {
  removeProductCategory(id: "YOUR_CATEGORY_ID") {
    _id
    name
  }
}


## Query For ProductSubCategory

Create ProductSubCategory
mutation {
  createProductSubCategory(input: {
    name: "Smartphones",
    productCategoryId: "YOUR_CATEGORY_ID"
  }) {
    _id
    name
  }
}

Get All SubCategories
query {
  findAllProductSubCategories {
    _id
    name
    productCategoryId
  }
}

Get One SubCategory
query {
  findProductSubCategory(id: "YOUR_SUBCATEGORY_ID") {
    _id
    name
    productCategoryId
  }
}

Update SubCategory
mutation {
  updateProductSubCategory(input: {
    id: "YOUR_SUBCATEGORY_ID",
    name: "Updated Subcategory Name"
  }) {
    _id
    name
  }
}
 Delete SubCategory
mutation {
  removeProductSubCategory(id: "YOUR_SUBCATEGORY_ID") {
    _id
    name
  }
}


## Query For Product

Create Product with relation
mutation {
  createProduct(input: {
    productId: "PRD123456789",
    name: "iPhone 15",
    description: "Latest Apple iPhone",
    price: 999.99,
    sku: "SKU1234",
    stock: 50,
    brand: "Apple",
    availabilityStatus: "In Stock",
    featured: true,
    isDigital: false,
    images: ["https://example.com/electronics.jpg", "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRwJ85RjINaYAavL4JhNQrpthvKTkZ2Dy0ooRniOD98tyu3zMev"],
    variants: [{ size: "M", color: "Black"}],
    tags: ["electronics", "new"],
    # category: "Smartphones",
    sellerId: "SELLER123",
    categoryId: "68063e0f29c398c719875bd4",
    subCategoryId: "68063e1229c398c719875bd6"
  }) {
    _id
    name
    price
  }
}

Get All Products
query {
  findAllProducts {
    _id
    productId
    name
    price
    brand
    stock
  }
}
Get All Products with relation
query {
  findAllProducts {
    _id
    name
    brand
    category {
      name
      image
    }
    subCategory {
      name
    }
  }
}


Get One Product
query {
  findProduct(id: "YOUR_PRODUCT_ID") {
    _id
    name
    description
    price
  }
}

Get One Product with relation
query {
  findProduct(id: "PRODUCT_ID_HERE") {
    _id
    name
    price
    category {
      name
    }
    subCategory {
      name
    }
  }
}



Update Product
mutation {
  updateProduct(input: {
    id: "YOUR_PRODUCT_ID",
    name: "Updated Product Name",
    price: 799.99
  }) {
    _id
    name
    price
  }
}

Delete Product
mutation {
  removeProduct(id: "YOUR_PRODUCT_ID") {
    _id
    name
  }
}

Sample GraphQL Playground Queries for Image

Create Image
mutation {
  createImage(input: {
    url: "https://image.com/main.jpg"
    color: "Black"
    images: ["https://image.com/img1.jpg", "https://image.com/img2.jpg"]
    price: 999
    productId: "PRODUCT_ID"
  }) {
    _id
    color
  }
}

Find All Images
query {
  findAllImages {
    _id
    url
    color
    price
    images
    productId
  }
}

Find Image by ID
query {
  findImage(id: "YOUR_IMAGE_ID") {
    _id
    url
    color
  }
}

Update Image
mutation {
  updateImage(input: {
    id: "YOUR_IMAGE_ID"
    color: "White"
  }) {
    _id
    color
  }
}

Delete Image
mutation {
  removeImage(id: "YOUR_IMAGE_ID") {
    _id
    color
  }
}




