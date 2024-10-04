import React, { useState } from "react";

const ProductFilter = ({ filterProducts }) => {
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [openPets, setOpenPets] = useState(false);

  const togglePets = () => {
    setOpenPets(!openPets);
  };

  // Inside your component
  const handleSliderChange = (e) => {
    const value = Number(e.target.value);
    setPriceRange([0, value]);

    // Calculate percentage based on the slider's value (for background fill)
    const percentage = (value / 1000) * 100;

    // Dynamically update background with a linear gradient
    e.target.style.background = `linear-gradient(to right, #00B7C0 ${percentage}%, #ddd ${percentage}%)`;
  };
  return (
    <div className="w-80 bg-white border border-gray-300 shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4 text-[#F2BC27]">
        Danh Mục Sản Phẩm
      </h2>
      <ul className="space-y-4 text-gray-700">
        <li
          className="flex justify-between items-center cursor-pointer hover:text-yellow-600 transition-colors duration-200"
          onClick={togglePets}>
          <span>Chó & Mèo</span>
          <span>{openPets ? "▾" : "›"}</span>
        </li>
        {openPets && (
          <ul className="space-y-2 bg-gray-100 p-2 rounded shadow-inner transition-all duration-300">
            <li
              className="cursor-pointer hover:text-yellow-600 text-start pb-2"
              onClick={() => setCategory("thuc-an-cho")}>
              Thức Ăn Cho Chó
            </li>
            <li
              className="cursor-pointer hover:text-yellow-600 text-start pb-2"
              onClick={() => setCategory("thuc-an-meo")}>
              Thức Ăn Cho Mèo
            </li>
            <li
              className="cursor-pointer hover:text-yellow-600 text-start pb-2"
              onClick={() => setCategory("chuong-cho")}>
              Chuồng Cho Chó
            </li>
            <li
              className="cursor-pointer hover:text-yellow-600 text-start pb-2"
              onClick={() => setCategory("chuong-meo")}>
              Chuồng Cho Mèo
            </li>
            <li
              className="cursor-pointer hover:text-yellow-600 text-start pb-2"
              onClick={() => setCategory("phu-kien-cho")}>
              Phụ Kiện Cho Chó
            </li>
            <li
              className="cursor-pointer hover:text-yellow-600 text-start pb-2"
              onClick={() => setCategory("phu-kien-meo")}>
              Phụ Kiện Cho Mèo
            </li>
            <li
              className="cursor-pointer hover:text-yellow-600 text-start pb-2"
              onClick={() => setCategory("do-choi-cho")}>
              Đồ Chơi Cho Chó
            </li>
            <li
              className="cursor-pointer hover:text-yellow-600 text-start pb-2"
              onClick={() => setCategory("do-choi-meo")}>
              Đồ Chơi Cho Mèo
            </li>
          </ul>
        )}
        {/* Danh sách các loại sản phẩm khác */}
        {["thu-y", "my-pham", "thoi-trang"].map((item) => (
          <li
            key={item}
            className="flex justify-between items-center cursor-pointer hover:text-yellow-600 transition-colors duration-200"
            onClick={() => setCategory(item)}>
            <span>
              {item === "thu-y"
                ? "Sản Phẩm Thú Y"
                : item === "my-pham"
                ? "Mỹ Phẩm Thú Cưng"
                : "Thời Trang Thú Cưng"}
            </span>
            <span>›</span>
          </li>
        ))}
      </ul>

      {/* Các bộ lọc khác */}
      <div className="mt-6">
        <div className="mt-4">
          <label className="block text-sm font-medium mb-2">Khoảng giá:</label>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={handleSliderChange}
            className="range-slider"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{priceRange[0]}k</span>
            <span>
              {priceRange[1] < 1000
                ? `${priceRange[1]}k`
                : `${(priceRange[1] / 1000).toFixed(1)} triệu`}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={filterProducts} // Giả định filterProducts là hàm để lọc sản phẩm
            className="w-full p-2 bg-[#F2BC27] font-bold text-white rounded hover:bg-yellow-700 transition duration-200 shadow-md hover:shadow-lg">
            Lọc sản phẩm
          </button>
        </div>

        {/* Hiển thị thông tin cửa hàng chỉ khi bộ lọc không mở */}
        {!openPets && (
          <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-gray-100">
            <h3 className="font-bold text-lg">
              PetCare - Shop Thú Cưng Uy Tín
            </h3>
            <p className="text-sm text-gray-600">Ninh Kiều, Tp.Cần Thơ</p>
            <p className="text-sm text-gray-600">Nhận Giao Hàng:</p>
            <p className="text-sm text-gray-600">
              Giao thú cưng toàn các tỉnh Tây Nam Bộ, giao trong ngày tại Tp.Cần
              Thơ. Giao phụ kiện, đồ dùng toàn quốc.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;
