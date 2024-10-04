import React, { useState, useEffect } from "react";
import Header from "../header/Header";

// Định nghĩa kiểu dữ liệu cho sản phẩm
interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  quantity: number;
  isRemoving?: boolean; // Thêm cờ isRemoving để theo dõi quá trình xóa sản phẩm
}

const Cart: React.FC = () => {
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const [products, setProducts] = useState<Product[]>([]);

  const loadCart = () => {
    const savedCart = sessionStorage.getItem("cart");
    if (savedCart) {
      const parsedProducts: Product[] = JSON.parse(savedCart).map((product: Product) => ({
        ...product,
        isRemoving: false,
      }));
      
      const productMap: { [id: number]: Product } = {};
      parsedProducts.forEach((product) => {
        if (productMap[product.id]) {
          productMap[product.id].quantity += product.quantity;
        } else {
          productMap[product.id] = { ...product };
        }
      });
      setProducts(Object.values(productMap));
    }
  };

  useEffect(() => {
    loadCart();
    const handleStorageChange = (event: StorageEvent) => {
      if (event.storageArea === sessionStorage) {
        loadCart();
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      );
      sessionStorage.setItem("cart", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  const addItemToCart = (newProduct: Product) => {
    setProducts((prevProducts) => {
      const existingProductIndex = prevProducts.findIndex(
        (p) => p.id === newProduct.id
      );
      let updatedProducts;
      if (existingProductIndex !== -1) {
        updatedProducts = prevProducts.map((product) =>
          product.id === newProduct.id
            ? { ...product, quantity: product.quantity + newProduct.quantity }
            : product
        );
      } else {
        updatedProducts = [...prevProducts, newProduct];
      }
      sessionStorage.setItem("cart", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  const handleRemoveItem = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, isRemoving: true } : product
      )
    );
    setTimeout(() => {
      setProducts((prevProducts) => {
        const updatedProducts = prevProducts.filter(
          (product) => product.id !== id
        );
        sessionStorage.setItem("cart", JSON.stringify(updatedProducts));
        return updatedProducts;
      });
    }, 300);
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => {
      const parsedPrice = parseFloat(product.price.toString().replace(/[^\d.-]/g, "")) || 0;
      return total + parsedPrice * product.quantity;
    }, 0);
  };

  return (
    <>
    <Header></Header>
    <div className="bg-white p-4 text-black w-[1000px] mx-auto ">
      <h1 className="text-2xl font-bold mb-4">Giỏ hàng của bạn</h1>
      {products.length === 0 ? (
        <div className="text-center">
          <img
            src="https://bizweb.dktcdn.net/100/373/627/themes/936292/assets/empty-cart.png?1719564212117"
            alt="Empty Cart"
            className="w-auto h-auto mx-auto mb-4"
          />
          <p className="text-gray-500">
            Không có sản phẩm nào trong giỏ hàng.{" "}
            <a
              href="/products"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Quay lại cửa hàng để tiếp tục mua sắm.
            </a>
          </p>
        </div>
      ) : (
        <>
          <table className="min-w-full px-3 table-auto border-collapse border-2 border-[#F2BC27]">
            <thead>
              <tr className="border-b-2 border-[#F2BC27]">
                <th className="px-6 py-8 font-medium text-center">Sản phẩm</th>
                <th className="px-6 py-8 text-left font-medium">Giá</th>
                <th className="px-6 py-8 text-left font-medium">Số lượng</th>
                <th className="px-6 py-8 text-left font-medium">Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                const parsedPrice =
               parseFloat(product.price.toString().replace(/[^\d.-]/g, "")) || 0;
                const totalPrice = parsedPrice * product.quantity;
  
                return (
                  <tr
                    key={product.id}
                    className="border-b transition-all duration-300"
                    style={{ opacity: product.isRemoving ? 0 : 1 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap flex items-center">
                      <button
                        className="text-gray-400 hover:text-gray-700 mr-4 bg-white text-[24px] border-none"
                        onClick={() => handleRemoveItem(product.id)}
                      >
                        &times;
                      </button>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-20 h-20 mr-4"
                      />
                      {product.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-left">
                      {formatPrice(parsedPrice)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex items-center justify-start">
                        <button
                          className="bg-white px-3 py-1 text-lg rounded-none border border-gray-300"
                          onClick={() =>
                            handleQuantityChange(
                              product.id,
                              Math.max(product.quantity - 1, 1)
                            )
                          }
                        >
                          -
                        </button>
                        <input
                          value={product.quantity}
                          min="1"
                          className="w-16 text-center p-[8.4px] border-l-0 border-r-0 border-t border-b border-gray-300"
                          onChange={(e) =>
                            handleQuantityChange(
                              product.id,
                              Math.max(parseInt(e.target.value, 10), 1)
                            )
                          }
                        />
                        <button
                          className="bg-white px-3 py-1 text-lg rounded-none border  border-gray-300"
                          onClick={() =>
                            handleQuantityChange(product.id, product.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-left">
                      {formatPrice(totalPrice)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
  
          <div className="mt-4 text-right">
            <h2 className="text-xl font-bold">Tổng cộng: {formatPrice(calculateTotal())}</h2>
          </div>
  
          <div className="flex justify-end gap-4 mt-6">
            <button className="bg-gray-200 text-black px-6 py-3 font-bold uppercase">
              Tiếp tục mua hàng
            </button>
            <button className="bg-[#F2BC27] text-white px-6 py-3 font-bold uppercase">
              Thanh toán
            </button>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default Cart;
