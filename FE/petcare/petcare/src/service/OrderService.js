import axios from 'axios'; // hoặc thư viện HTTP client khác mà bạn sử dụng

const API_BASE_URL = 'http://localhost:8080/api'; // Đường dẫn cơ sở của API, điều chỉnh nếu cần

const OrderService = {
    getAllOrders: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/orders`);
            return response.data;
        } catch (error) {
            console.error('Lỗi khi lấy danh sách đơn hàng:', error);
            throw error; // Hoặc xử lý lỗi theo cách phù hợp với ứng dụng của bạn
        }
    },

    getOrderById: async (id) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/orders/${id}`);
            return response.data;
        } catch (error) {
            console.error('Lỗi khi lấy đơn hàng theo ID:', error);
            throw error;
        }
    },

    createOrder: async (orderData) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/orders`, orderData);
            return response.data;
        } catch (error) {
            console.error('Lỗi khi tạo đơn hàng:', error);
            throw error;
        }
    },

    updateOrder: async (id, orderData) => {
        try {
            const response = await axios.put(`${API_BASE_URL}/orders/${id}`, orderData);
            return response.data;
        } catch (error) {
            console.error('Lỗi khi cập nhật đơn hàng:', error);
            throw error;
        }
    },

    deleteOrder: async (id) => {
        try {
            await axios.delete(`${API_BASE_URL}/orders/${id}`);
        } catch (error) {
            console.error('Lỗi khi xóa đơn hàng:', error);
            throw error;
        }
    },
};

export default OrderService;