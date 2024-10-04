import React from "react";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
    return (
        <>
            <div className="p-6 text-3xl font-bold text-white bg-indigo-600">
                Petcare
            </div>
            <nav className="bg-gray-900 text-gray-200 h-full">
                <ul>
                    <li className="p-4 flex items-center hover:bg-indigo-600 hover:text-white cursor-pointer transition-colors duration-300">
                        <Link to="/">
                           
                            Dashboard
                        </Link>
                    </li>
                    <li className="p-4 flex items-center hover:bg-indigo-600 hover:text-white cursor-pointer transition-colors duration-300">
                        <Link to="/about">
                            
                            Quản lý users
                        </Link>
                    </li>
                    <li className="p-4 flex items-center hover:bg-indigo-600 hover:text-white cursor-pointer transition-colors duration-300">
                        <Link to="/products">
                           
                            Quản lý sản phẩm
                        </Link>
                    </li>
                    <li className="p-4 flex items-center hover:bg-indigo-600 hover:text-white cursor-pointer transition-colors duration-300">
                        <Link to="/orders">
                           
                            Quản lý đơn hàng
                        </Link>
                    </li>
                    <li className="p-4 flex items-center hover:bg-indigo-600 hover:text-white cursor-pointer transition-colors duration-300">
                        <Link to="/payment-methods">
                          
                            Phương thức thanh toán
                        </Link>
                    </li>
                    <li className="p-4 flex items-center hover:bg-indigo-600 hover:text-white cursor-pointer transition-colors duration-300">
                        <Link to="/orders/create">
                           
                            Đặt hàng
                        </Link>
                    </li>
                    <li className="p-4 flex items-center hover:bg-indigo-600 hover:text-white cursor-pointer transition-colors duration-300">
                        <Link to="/products/list">
                          
                            Sản phẩm
                        </Link>
                    </li>
                    <li className="p-4 flex items-center hover:bg-indigo-600 hover:text-white cursor-pointer transition-colors duration-300">
                        <Link to="/logout">
                            
                            Đăng Xuất
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default SidebarMenu;
