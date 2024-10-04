import React, { useState } from "react";
import Header from "../header/Header";

export default function ProductDetail() {
    const images = [
        "https://www.petmart.vn/wp-content/uploads/2016/09/bat-an-cho-cho-meo-nhua-mem-sawyer-pet-0713-size-s.jpg",
        "https://www.petmart.vn/wp-content/uploads/2016/09/bat-an-cho-cho-meo-nhua-mem-sawyer-pet-0713-size-s-1.jpg",
        "https://www.petmart.vn/wp-content/uploads/2013/10/bat-an-cho-cho-meo-bang-cao-su-sawyer-pet-silicone-bowl-768x769.jpg"
    ];

    const [mainImage, setMainImage] = useState(images[0]);
    const [activeSection, setActiveSection] = useState("description");
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setMainImage(images[(currentIndex + 1) % images.length]);
    };

    // Function to go to the previous image
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setMainImage(images[(currentIndex - 1 + images.length) % images.length]);
    };

    return (
        <>
        <Header></Header>
        <div className="p-6 mt-2 max-w-7xl mx-auto">
            {/* Product Header */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 bg-white shadow-lg rounded-lg p-6">
                {/* Product Image */}
                <div className="flex-shrink-0 lg:w-1/3 relative">
                    <img
                        src={mainImage}
                        alt="Product"
                        className="w-full h-auto object-cover rounded-lg border border-gray-200 shadow-md"
                    />

                    {/* Carousel Buttons */}
                    <button
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
                        onClick={prevImage}
                    >
                        &#10094; {/* Left Arrow */}
                    </button>
                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
                        onClick={nextImage}
                    >
                        &#10095; {/* Right Arrow */}
                    </button>

                    {/* Thumbnail images */}
                    <div className="flex mt-4 gap-2 justify-center">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                className={`w-16 h-16 cursor-pointer border border-gray-300 rounded-lg shadow-sm ${mainImage === img ? "border-blue-500" : ""
                                }`}
                                onClick={() => {
                                    setMainImage(img);
                                    setCurrentIndex(index);
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 lg:pl-8">
                    <h1 className="text-3xl font-bold mb-2 text-gray-800">Bát ăn cho chó mèo nhựa mềm SAWYER PET</h1>
                    <p className="text-red-600 text-3xl font-semibold mb-4">40.000₫</p>

                    {/* Order Options */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-medium">Số lượng</span>
                            <input
                                type="number"
                                min="1"
                                defaultValue="1"
                                className="border border-gray-300 rounded-lg w-20 p-2 text-center"
                            />
                        </div>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300">
                            Thêm vào giỏ hàng
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300">
                            Đặt mua số lượng lớn
                        </button>
                    </div>

                    {/* Purchase Information */}
                    <div className="bg-blue-50 text-blue-700 p-4 rounded-lg shadow-md mb-4">
                        <p className="font-semibold">
                            Đăng ký nhận{" "}
                            <span className="text-blue-800">Voucher</span> tắm
                            spa cắt tỉa lông thú cưng miễn phí!
                        </p>
                    </div>
                </div>
            </div>

            {/* Product Description and Purchase Address Sections */}
            <div className="mt-8 bg-white shadow-lg rounded-lg">
                <div className="flex gap-4 py-4 border-b border-gray-200">
                    <button
                        onClick={() => setActiveSection("description")}
                        className={`py-2 px-4 text-lg ${activeSection === "description" ? "font-semibold border-b-2 border-blue-600 text-blue-600" : "text-gray-500"}`}
                    >
                        Mô tả
                    </button>
                    <button
                        onClick={() => setActiveSection("address")}
                        className={`py-2 px-4 text-lg ${activeSection === "address" ? "font-semibold border-b-2 border-blue-600 text-blue-600" : "text-gray-500"}`}
                    >
                        Địa chỉ mua hàng
                    </button>
                </div>
                {activeSection === "description" && (
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Lợi ích chính</h2>
                        <p className="text-gray-700 mb-4">Bát ăn cho chó mèo nhựa mềm SAWYER PET là sản phẩm được dùng cho tất cả các giống chó và mèo.</p>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li>Bát ăn mềm dẻo, không gây hại cho thú cưng.</li>
                            <li>Sản phẩm đạt tiêu chuẩn xuất khẩu Châu Âu.</li>
                            <li>Dễ dàng vệ sinh, không gây hại cho chó mèo.</li>
                        </ul>
                    </div>
                )}
                {activeSection === "address" && (
                    <div className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Left Column */}
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold mb-2 text-gray-800">Địa chỉ mua hàng</h2>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">📍 Pet Mart tại Hà Nội (12)</h3>
                                    <ul className="list-disc pl-5 text-gray-600 mb-4">
                                        <li>3 Đại Cồ Việt, Phường Cầu Dền, Quận Hai Bà Trưng</li>
                                        <li>476 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng</li>
                                        <li>83 Nghi Tàm, Phường Yên Phụ, Quận Tây Hồ</li>
                                        <li>206 Kim Mã, Phường Kim Mã, Quận Ba Đình</li>
                                        <li>18 Chả Cá, Phường Hàng Đào, Quận Hoàn Kiếm</li>
                                        <li>242 Nguyễn Trãi, Phường Thanh Xuân Trung, Quận Thanh Xuân</li>
                                        <li>290 Nguyễn Văn Cừ, Phường Bồ Đề, Quận Long Biên</li>
                                        <li>81 Quang Trung, Phường Quang Trung, Quận Hà Đông</li>
                                        <li>Villa E10 Đỗ Đình Thiện, Phường Mỹ Đình, Quận Nam Từ Liêm</li>
                                        <li>119 Nguyễn Chí Thanh, Phường Láng Hạ, Quận Đống Đa</li>
                                        <li>42 Hồ Đắc Di, Phường Trung Liệt, Quận Đống Đa</li>
                                        <li>85 Khuất Duy Tiến, Phường Thanh Xuân Bắc, Quận Thanh Xuân</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Right Column */}
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mt-4 mb-2">📍 Pet Mart tại TP.Hồ Chí Minh (18)</h3>
                                <ul className="list-disc pl-5 text-gray-600 mb-4">
                                    <li>244 Khánh Hội, Phường 6, Quận 4</li>
                                    <li>116 Ba Tháng Hai, Phường 12, Quận 10</li>
                                    <li>341 Nguyễn Trãi, Phường 7, Quận 5</li>
                                    <li>312 Quang Trung, Phường 10, Quận Gò Vấp</li>
                                    <li>892 Cách Mạng Tháng 8, Phường 5, Quận Tân Bình</li>
                                    <li>179 Xô Viết Nghệ Tĩnh, Phường 17, Quận Bình Thạnh</li>
                                    <li>266 Võ Văn Tần, Phường 5, Quận 3</li>
                                    <li>180 Nguyễn Văn Hưởng, Phường Thảo Điền, Quận 2</li>
                                    <li>222 Phan Đăng Lưu, Phường 3, Quận Phú Nhuận</li>
                                    <li>618 Nguyễn Thị Thập, Phường Tân Hưng, Quận 7</li>
                                    <li>84 Tô Hiến Thành, Phường 15, Quận 10</li>
                                    <li>60 Lê Văn Việt, Phường Hiệp Phú, Quận 9</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Reviews Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Đánh giá sản phẩm</h2>
                <textarea
                    placeholder="Viết đánh giá của bạn tại đây..."
                    className="w-full border border-gray-300 rounded-lg p-4 mb-4"
                    rows="5"
                ></textarea>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300">
                    Gửi đánh giá
                </button>
            </div>
        </div>
        </>
    );
}
