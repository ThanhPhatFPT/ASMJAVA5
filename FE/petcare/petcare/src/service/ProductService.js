import axios from "axios";

const API_URL = "http://localhost:8080/api/products";

const ProductService = {
    // Lấy tất cả sản phẩm
    getAllProducts: async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data; // Axios tự động phân tích các phản hồi JSON
        } catch (error) {
            console.error("Lỗi khi lấy danh sách sản phẩm:", error.response?.data || error.message);
            throw new Error("Không thể lấy danh sách sản phẩm."); // Thông báo lỗi bằng tiếng Việt
        }
    },

    // Lấy sản phẩm theo ID
    getProductById: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error("Lỗi khi lấy sản phẩm:", error.response?.data || error.message);
            throw new Error("Không tìm thấy sản phẩm."); // Thông báo lỗi bằng tiếng Việt
        }
    },

    // Tạo một sản phẩm mới
    createProduct: async (product) => {
        try {
            const response = await axios.post(API_URL, product, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return response.data;
        } catch (error) {
            console.error("Lỗi khi tạo sản phẩm:", error.response?.data || error.message);
            throw new Error("Không thể tạo sản phẩm."); // Thông báo lỗi bằng tiếng Việt
        }
    },

    // Cập nhật một sản phẩm hiện có
    updateProduct: async (id, product) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, product, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return response.data;
        } catch (error) {
            console.error("Lỗi khi cập nhật sản phẩm:", error.response?.data || error.message);
            throw new Error("Không thể cập nhật sản phẩm."); // Thông báo lỗi bằng tiếng Việt
        }
    },

    // Xóa một sản phẩm
    deleteProduct: async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            return { status: 'success' }; // Bạn có thể trả về một thông điệp hoặc trạng thái thành công
        } catch (error) {
            console.error("Lỗi khi xóa sản phẩm:", error.response?.data || error.message);
            throw new Error("Không thể xóa sản phẩm."); // Thông báo lỗi bằng tiếng Việt
        }
    }
};

export default ProductService;
