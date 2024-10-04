import axios from "axios";

const API_URL = "http://localhost:8080/api/brands"; // Địa chỉ API của thương hiệu

const BrandService = {
    // Lấy tất cả thương hiệu
    getAllBrands: async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data; // Trả về dữ liệu danh sách thương hiệu
        } catch (error) {
            console.error("Error fetching brands:", error.response?.data || error.message);
            throw error; // Ném lại lỗi để xử lý sau
        }
    },

    // Lấy thương hiệu theo ID
    getBrandById: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/${id}`);
            return response.data; // Trả về dữ liệu thương hiệu
        } catch (error) {
            console.error("Error fetching brand:", error.response?.data || error.message);
            throw error;
        }
    },

    // Thêm thương hiệu mới
    createBrand: async (brand) => {
        try {
            const response = await axios.post(API_URL, brand, {
                headers: {
                    "Content-Type": "application/json" // Đặt kiểu nội dung là JSON
                }
            });
            return response.data; // Trả về thương hiệu mới được thêm
        } catch (error) {
            console.error("Error creating brand:", error.response?.data || error.message);
            throw error;
        }
    },

    // Cập nhật thương hiệu
    updateBrand: async (id, brand) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, brand, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return response.data; // Trả về thương hiệu đã cập nhật
        } catch (error) {
            console.error("Error updating brand:", error.response?.data || error.message);
            throw error;
        }
    },

    // Xóa thương hiệu
    deleteBrand: async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            return { status: 'success' }; // Trả về trạng thái thành công
        } catch (error) {
            console.error("Error deleting brand:", error.response?.data || error.message);
            throw error;
        }
    }
};

export default BrandService; // Xuất BrandService để sử dụng trong các thành phần khác
