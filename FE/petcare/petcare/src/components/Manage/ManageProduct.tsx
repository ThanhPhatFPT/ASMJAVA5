import React, { useState, useEffect } from 'react';
import ProductService from '../../service/ProductService'; // Ensure this path is correct

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    id: '', 
    name: '', 
    quantity: '', 
    description: '', 
    imageUrl: '', 
    category: '', 
    brand: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await ProductService.getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle optional fields (category and brand)
    const finalData = {
      ...formData,
      category: formData.category || null, // Set to null if empty
      brand: formData.brand || null // Set to null if empty
    };

    try {
      if (isEditing) {
        await ProductService.updateProduct(finalData.id, finalData);
      } else {
        await ProductService.createProduct(finalData);
      }
      setFormData({
        id: '', 
        name: '', 
        quantity: '', 
        description: '', 
        imageUrl: '', 
        category: '', 
        brand: ''
      });
      setIsEditing(false);
      fetchProducts(); // Refresh product list
    } catch (error) {
      console.error('Error submitting product:', error);
    }
  };

  const handleEdit = (product) => {
    setFormData({
      ...product,
      category: product.category || '', // Empty string if null
      brand: product.brand || '' // Empty string if null
    });
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await ProductService.deleteProduct(id);
        fetchProducts(); // Refresh product list
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Manage Products</h1>

      {/* Add/Edit Product Form */}
      <div className="bg-gray-100 p-6 rounded-md shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">{isEditing ? 'Edit Product' : 'Add New Product'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              value={formData.imageUrl}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="category"
              placeholder="Category (optional)"
              value={formData.category}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="brand"
              placeholder="Brand (optional)"
              value={formData.brand}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-4">
            {isEditing ? (
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Update Product
              </button>
            ) : (
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                Add Product
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Product Table */}
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Image URL</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Brand</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.productId} className="border-b">
              <td className="px-6 py-4 whitespace-nowrap">{product.productId}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.productName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.productQuantity}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.description}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.imageUrl}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.category?.name || 'N/A'}</td> {/* Handle null */}
              <td className="px-6 py-4 whitespace-nowrap">{product.brand?.name || 'N/A'}</td> {/* Handle null */}
              <td className="px-6 py-4 whitespace-nowrap">
                <button 
                  className="bg-yellow-500 text-white px-4 py-1 rounded-md mr-2"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
                <button 
                  className="bg-red-500 text-white px-4 py-1 rounded-md"
                  onClick={() => handleDelete(product.productId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
