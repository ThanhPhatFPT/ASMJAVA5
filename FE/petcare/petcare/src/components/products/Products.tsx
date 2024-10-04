// Products.tsx
import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import ProductFilter from "../products/ProductsFilter"; // Import component lọc
// Component for the product sub-navigation menu
const ProductSubMenu = () => {
  return (
    <>
      <Header></Header>
      <div className="relative mt-4">
        {/* Title with parallelogram and line */}
        <div className="flex mb-4 relative">
          {/* Parallelogram with title inside */}
          <div className="relative z-10 flex">
            <div className="w-48 h-10 bg-[#00B7C0] relative flex items-center justify-center text-white font-bold transform skew-x-[-20deg]">
              <span className="transform skew-x-[20deg] text-xl">
                SHOP CHO CÚN
              </span>
            </div>
          </div>
          {/* Line connecting to the parallelogram */}
          <div className="flex-grow h-[2px] bg-[#00B7C0] relative">
            {/* Sub-menu Items */}
            <nav className="absolute z-1 flex space-x-6 pl-4 pt-4 text-[16px]">
              <a href="#" className="text-gray-600 hover:text-black">
                Thức ăn & pate
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Bát ăn
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Vòng cổ dây dắt
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Thuốc và dinh dưỡng
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Sữa tắm & dụng cụ vệ sinh
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Xem tất cả
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

// Component for the product sub-navigation menu
const ProductSubMenu2 = () => {
  return (
    <div className="relative mt-4">
      {/* Title with parallelogram and line */}
      <div className="flex mb-4 relative">
        {/* Parallelogram with title inside */}
        <div className="relative z-10 flex">
          <div className="w-48 h-12 bg-[#00B7C0] relative flex items-center justify-center text-white font-bold transform skew-x-[-20deg]">
            <span className="transform skew-x-[20deg] text-xl">
              SHOP CHO MÈO
            </span>
          </div>
        </div>
        {/* Line connecting to the parallelogram */}
        <div className="flex-grow h-[2px] bg-[#00B7C0] relative">
          {/* Sub-menu Items */}
          <nav className="absolute z-1 flex space-x-6 pl-4 pt-4 text-[16px]">
            <a href="#" className="text-gray-600 hover:text-black">
              Thức ăn & pate
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Bát ăn
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Vòng cổ dây dắt
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Thuốc và dinh dưỡng
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Sữa tắm & dụng cụ vệ sinh
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Xem tất cả
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

// Product Item Component
const ProductItem = ({ image, title, price, addToCart }) => {
  return (
    <div className="relative bg-white p-4 shadow-lg rounded-lg overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="font-sans text-lg font-semibold text-[#515151] mt-2 mb-2 truncate whitespace-nowrap overflow-ellipsis">
        {title}
      </h3>
      <p className="text-[#F2BC27]">{price}đ</p>

      {/* Hover effect for buttons */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-transparent via-[#2e353c50] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        <div className="flex space-x-2 z-2">
          {/* Favorite icon */}
          <button className="text-white text-xl p-2 bg-gray-600 rounded-full hover:bg-[#F2BC27] hover:text-white transition-colors duration-300 shadow-md z-20">
            <i className="fas fa-heart"></i>
          </button>
          {/* View details icon */}
          <button className="text-white text-xl p-2 bg-gray-600 rounded-full hover:bg-[#F2BC27] hover:text-white  transition-colors duration-300 shadow-md z-20">
            <i className="fas fa-eye"></i>
          </button>
          {/* Add to cart icon */}
          <button
            className="text-white text-xl p-2 bg-gray-600 rounded-full hover:bg-[#F2BC27] hover:text-white transition-colors duration-300 shadow-md z-20"
            onClick={addToCart} // Sử dụng hàm addToCart được truyền vào như một prop
          >
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

// Featured Product Component
const FeaturedProduct2 = ({
  image,
  title,
  price,
  purchaseCount,
  rating,
  addToCart,
}) => {
  // Tạo hàm render các ngôi sao
  const renderStars = () => {
    const validRating =
      typeof rating === "number" && rating >= 0 && rating <= 5 ? rating : 0; // Kiểm tra rating hợp lệ
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        // ở đây không phải lỗi mà đang bị vấn đề gì đó vẫn chạy được bình thường
        <i
          key={i}
          className={`fas fa-star ${
            i <= validRating ? "text-yellow-500" : "text-gray-300"
          }`}></i>
      );
    }
    return stars;
  };

  return (
    <div className="relative bg-white p-[10px] h-[165px] shadow-lg flex space-x-3">
      {/* Hình ảnh sản phẩm */}
      <img
        src={image}
        alt={title}
        className="w-[100px] h-36 object-cover rounded-md"
      />

      {/* Nội dung sản phẩm */}
      <div className="flex flex-col flex-1">
        {/* Tiêu đề, số lượt mua và đánh giá */}
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-[#515151] mb-1 overflow-hidden text-ellipsis line-clamp-1">
            {title}
          </h3>

          {/* Số lượt mua hàng */}
          <p className="text-sm text-start text-gray-500 mb-1">
            Đã bán: {purchaseCount} lượt
          </p>

          <p className="text-[20px] text-[#F2BC27] font-bold mt-1 text-start mb-1">
            {price}đ
          </p>

          {/* Đánh giá bằng sao */}
          <div className="flex space-x-1 text-sm mb-1">{renderStars()}</div>
        </div>

        {/* Nút hành động (Favorite, View Details, Add to Cart) */}
        <div className="flex space-x-2 justify-start p-y-2 rounded-lg">
          {/* Favorite icon */}
          <button className="text-white text-xl p-2 bg-gray-600 rounded-full hover:bg-[#F2BC27] hover:text-white transition-colors duration-300 shadow-md">
            <i className="fas fa-heart"></i>
          </button>
          {/* View details icon */}
          <button className="text-white text-xl p-2 bg-gray-600 rounded-full hover:bg-[#F2BC27] hover:text-white transition-colors duration-300 shadow-md">
            <i className="fas fa-eye"></i>
          </button>
          {/* Add to cart icon */}
          <button
            className="text-white text-xl p-2 bg-gray-600 rounded-full hover:bg-[#F2BC27] hover:text-white transition-colors duration-300 shadow-md"
            onClick={addToCart}>
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

// Product Item Component
const ProductItem2 = ({ image, title, price, addToCart }) => {
  return (
    <div className="relative bg-white p-4 shadow-lg rounded-lg overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="font-sans text-lg font-semibold text-[#515151] mt-2 mb-2 truncate whitespace-nowrap overflow-ellipsis">
        {title}
      </h3>
      <p className="text-[#F2BC27]">{price}đ</p>

      {/* Hover effect for buttons */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-transparent via-[#2e353c50] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        <div className="flex space-x-2 z-2">
          {/* Favorite icon */}
          <button className="text-white text-xl p-2 bg-gray-600 rounded-full hover:bg-[#F2BC27] hover:text-white transition-colors duration-300 shadow-md z-20">
            <i className="fas fa-heart"></i>
          </button>
          {/* View details icon */}
          <button className="text-white text-xl p-2 bg-gray-600 rounded-full hover:bg-[#F2BC27] hover:text-white  transition-colors duration-300 shadow-md z-20">
            <i className="fas fa-eye"></i>
          </button>
          {/* Add to cart icon */}
          <button
            className="text-white text-xl p-2 bg-gray-600 rounded-full hover:bg-[#F2BC27] hover:text-white transition-colors duration-300 shadow-md z-20"
            onClick={addToCart} // Sử dụng hàm addToCart được truyền vào như một prop
          >
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Products Page Component
export default function   Products() {
  const [cart, setCart] = useState(() => {
    // Lấy giỏ hàng từ session storage hoặc thiết lập rỗng nếu không có
    const savedCart = sessionStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    // Lưu vào session storage
    sessionStorage.setItem("cart", JSON.stringify(newCart));
  };

  const featuredProducts = [
    {
      id: 1,
      image:
        "https://product.hstatic.net/200000521195/product/cc7ab594-27c0-41b4-b35f-dac71034e395_84ce728c1e344bd785ca78e2f686e237_large.jpeg",
      title: "Bát ăn nghiêng chống gù cho chó mèo",
      price: 45000, // Giá dạng số
      quantity: 1,
      category: "phụ kiện", // Loại sản phẩm
      isBestSeller: true, // Sản phẩm bán chạy
      petType: "chó mèo", // Loại vật nuôi
      purchaseCount: 120, // Số lượt mua hàng
      rating: 4.5, // Đánh giá bằng sao
    },
    {
      id: 2,
      image:
        "https://product.hstatic.net/200000521195/product/3106a128-c1e9-4a96-bbfb-7a2c2a9ab700_209ef83ea37d4c92bd49904eef47445b_large.jpeg",
      title: "Sữa tắm JOYCE & DOLLS",
      price: 175000,
      quantity: 1,
      category: "vệ sinh",
      isBestSeller: false,
      petType: "chó",
      purchaseCount: 75, // Số lượt mua hàng
      rating: 4.0, // Đánh giá bằng sao
    },
    {
      id: 3,
      image:
        "https://product.hstatic.net/200000521195/product/4f48748b-f0e3-48a9-9ecd-2f10acb538c3_bbacd6cfa7054e8e8aab5dc9cb5ee2cd_large.jpeg",
      title: "Thức ăn hạt khô cho chó",
      price: 230000,
      quantity: 1,
      category: "thức ăn",
      isBestSeller: true,
      petType: "chó",
      purchaseCount: 200, // Số lượt mua hàng
      rating: 4.8, // Đánh giá bằng sao
    },
    {
      id: 10,
      image:
        "https://product.hstatic.net/200000521195/product/4eac828c-1667-4449-a00d-da77335e8294_edd5ccea7b3b4a4388b3ef3fa6c05efa_large.jpeg",
      title: "Bộ cây lăn lông tĩnh điện size lớn",
      price: 75000,
      quantity: 1,
      category: "vệ sinh",
      isBestSeller: true,
      petType: "chó",
      purchaseCount: 789, // Số lượt mua hàng
      rating: 5.0, // Đánh giá bằng sao
    },
    // Thêm sản phẩm khác nếu cần
  ];

  const productList = [
    {
      id: 1,
      image:
        "https://product.hstatic.net/200000521195/product/cc7ab594-27c0-41b4-b35f-dac71034e395_84ce728c1e344bd785ca78e2f686e237_large.jpeg",
      title: "Bát ăn nghiêng chống gù cho chó mèo",
      price: 45000, // Giá dạng số
      quantity: 1,
      category: "phụ kiện", // Loại sản phẩm
      isBestSeller: true, // Sản phẩm bán chạy
      petType: "chó mèo", // Loại vật nuôi
    },
    {
      id: 2,
      image:
        "https://product.hstatic.net/200000521195/product/3106a128-c1e9-4a96-bbfb-7a2c2a9ab700_209ef83ea37d4c92bd49904eef47445b_large.jpeg",
      title: "Sữa tắm JOYCE & DOLLS",
      price: 175000,
      quantity: 1,
      category: "vệ sinh",
      isBestSeller: false,
      petType: "chó",
    },
    {
      id: 3,
      image:
        "https://product.hstatic.net/200000521195/product/4f48748b-f0e3-48a9-9ecd-2f10acb538c3_bbacd6cfa7054e8e8aab5dc9cb5ee2cd_large.jpeg",
      title: "Thức ăn hạt khô cho chó",
      price: 230000,
      quantity: 1,
      category: "thức ăn",
      isBestSeller: true,
      petType: "chó",
    },
    {
      id: 4,
      image:
        "https://product.hstatic.net/200000521195/product/6e1748bc-ce70-44e8-9c69-0a02c2f796d6_0e1c18fd5e594cf09f6977cfecde5343_large.jpeg",
      title: "Yếm cổ đáng yêu cho chó mèo",
      price: 35000,
      quantity: 1,
      category: "phụ kiện",
      isBestSeller: false,
      petType: "chó mèo",
    },
    {
      id: 5,
      image:
        "https://product.hstatic.net/200000521195/product/f1300725-2df8-457b-9fbe-f04822911bcb_9d9e030c906a4009ae2c1fcb27e7d16e_large.jpeg",
      title: "Vòng cổ may mắn cho chó mèo",
      price: 30000,
      quantity: 1,
      category: "phụ kiện",
      isBestSeller: false,
      petType: "chó mèo",
    },
    {
      id: 6,
      image:
        "https://product.hstatic.net/200000521195/product/e9c27b02-e8c2-4662-b014-306c1525a5f3_ad4d8375e9dc43fa85d3838a99039c7a_large.jpeg",
      title: "Vòng cổ vải kèm chuông",
      price: 35000,
      quantity: 1,
      category: "phụ kiện",
      isBestSeller: true,
      petType: "chó mèo",
    },
    {
      id: 7,
      image:
        "https://product.hstatic.net/200000521195/product/64cc4d3f-8f5e-4748-82a5-5dcf8609426e_4fbdf3e75cf841479ee522d5ceef528a_large.jpeg",
      title: "Sữa tắm DORRIKEY cho chó mèo",
      price: 85000,
      quantity: 1,
      category: "vệ sinh",
      isBestSeller: false,
      petType: "chó mèo",
    },
    {
      id: 8,
      image:
        "https://product.hstatic.net/200000521195/product/90d60a62-2b41-4b76-bf57-91280a180556_edc497eba6df4c1e9da89d81ee749b76_large.jpeg",
      title: "Bánh thưởng CATNIP cho mèo",
      price: 30000,
      quantity: 1,
      category: "thức ăn",
      isBestSeller: true,
      petType: "mèo",
    },
  ];

  const customers = [
    { id: 1, imgSrc: "https://i.imgur.com/GNBOYAdl.jpg", alt: "Customer 1" },
    { id: 2, imgSrc: "https://i.imgur.com/qq64QDel.jpg", alt: "Customer 2" },
    { id: 3, imgSrc: "https://i.imgur.com/AHUbIHSl.jpg", alt: "Customer 3" },
    { id: 4, imgSrc: "https://i.imgur.com/nuWRgTfl.jpg", alt: "Customer 4" },
  ];

  const sliderImages = [
    {
      src: "https://theme.hstatic.net/1000238938/1000576591/14/slider_index_1_5.jpg?v=386",
      link: "/product1",
    },
    {
      src: "https://theme.hstatic.net/200000521195/1000872898/14/slider_2.jpg?v=259",
      link: "/product2",
    },
    {
      src: "https://theme.hstatic.net/200000521195/1000872898/14/slider_1.jpg?v=259",
      link: "/product3",
    },
  ];

  // Hàm lọc sản phẩm
  const filterProducts = ({ category }) => {
    let filtered = productList;
    // Lọc theo loại
    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }
  };

  return (
    <div className="container w-full p-4">
      {/* Menu demo */}
      {/* <div className="flex justify-between items-center mb-5 bg-white p-4 rounded-lg shadow-md text-black">
        <div className="text-xl font-bold">Shop Cún Mèo</div>
        <div className="flex space-x-6">
          <a href="#" className="text-lg font-semibold hover:text-[#00B7C0]">
            Trang Chủ
          </a>
          <a href="#" className="text-lg font-semibold hover:text-[#00B7C0]">
            Sản Phẩm
          </a>
          <a href="#" className="text-lg font-semibold hover:text-[#00B7C0]">
            Liên Hệ
          </a>
        </div>
        <div className="relative">
          <button className="text-lg font-semibold bg-[#ffffff] p-2 rounded-lg">
            <i className="fas fa-shopping-cart"></i> 
          </button>
          <span className="absolute top-0 right-0 bg-[#00B7C0] text-white text-sm w-5 h-5 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        </div>
      </div> */}

      {/* Shop cho cún */}
      <div className="flex flex-col md:flex-row gap-4 mb-5">
        {/* Featured Product on the left */}
        <div className="md:w-1/4 grid justify-start pt-[15px] text-black">
          <ProductFilter filterProducts={filterProducts} />
        </div>

        {/* Right section with sub-menu and product grid */}
        <div className="md:w-3/4">
          {/* Sub-menu aligned with the top of the featured product */}
          <ProductSubMenu />
          {/* Grid with other products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productList.map((product, id) => (
              // Trong component Products
              <ProductItem
                key={id}
                {...product}
                addToCart={() => addToCart(product)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Khách hàng thân thiết */}
      <h2 className="text-2xl font-semibold text-[#00B7C0] mb-6 relative inline-block">
        Ảnh Lưu Niệm Khách Hàng
        <div className="w-12 border-t-2 border-[#F2BC27] absolute left-0 top-1/2 transform -translate-x-full"></div>
        <div className="w-12 border-t-2 border-[#F2BC27] absolute right-0 top-1/2 transform translate-x-full"></div>
      </h2>
      <div className="flex justify-center space-x-8">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className="rounded-full overflow-hidden w-40 h-40">
            <img
              src={customer.imgSrc}
              alt={customer.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Shop cho mèo */}
      <div className="flex flex-col md:flex-row gap-4 mt-5">
        {/* Right section with sub-menu and product grid */}
        <div className="md:w-3/4">
          {/* List sản phẩm bên trái */}
          <ProductSubMenu2 />
          {/* Grid with other products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productList.map((product, id) => (
              // Trong component Products
              <ProductItem2
                key={id}
                {...product}
                addToCart={() => addToCart(product)}
              />
            ))}
          </div>
        </div>
        {/* Sản phẩm nổi bật bên phải */}
        <div className="md:w-1/4 grid justify-end pt-[15px]">
          <div className="space-y-4 border-2 rounded-xl overflow-hidden shadow-lg">
            {" "}
            {/* Thêm overflow-hidden */}
            {Array.isArray(featuredProducts) && featuredProducts.length > 0 ? (
              featuredProducts.slice(0, 4).map((product) => (
                <div key={product.id} className="relative">
                  {" "}
                  {/* Thêm relative nếu cần */}
                  <FeaturedProduct2
                    image={product.image}
                    title={product.title}
                    purchaseCount={product.purchaseCount}
                    price={product.price}
                    rating={product.rating}
                    addToCart={() => addToCart(product)}
                  />
                </div>
              ))
            ) : (
              <p>Không có sản phẩm nổi bật nào.</p>
            )}
          </div>
        </div>
      </div>

      {/* Slider at the bottom */}
      <div className="mt-10">
        <div className="relative">
          {/* Slider container */}
          <div className="flex justify-center gap-4 p-2">
            {/* Hình lớn bên trái */}
            <a
              href={sliderImages[0].link}
              className="w-2/3 h-[374px]" // Kích thước hình lớn
            >
              <img
                src={sliderImages[0].src}
                alt="Slide 1"
                className="w-full h-[374px] object-cover rounded-lg"
              />
            </a>

            {/* Hai hình nhỏ bên phải */}
            <div className="flex flex-col h-[374px] gap-y-8 w-1/3">
              <a href={sliderImages[1].link} className="h-[182px]">
                {" "}
                {/* Kích thước hình nhỏ thứ nhất */}
                <img
                  src={sliderImages[1].src}
                  alt="Slide 2"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </a>
              <a href={sliderImages[2].link} className="h-[182px]">
                {" "}
                {/* Kích thước hình nhỏ thứ hai */}
                <img
                  src={sliderImages[2].src}
                  alt="Slide 3"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
