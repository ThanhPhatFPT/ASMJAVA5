import "./App.css";
import Cart from "./components/cart/Cart";
import OrderManagementPage from "./components/order/OrderManagementPage";
import { OrderProvider } from "./components/order/OrderContext";
import { ComingSoon } from "./components/other/ComingSoon";
import Products from "./components/products/Products";
import HomePage from "./pages/HomePage";
import ManageProduct from "./components/Manage/ManageProduct";
import ProductDetail from "./components/productdetail/ProductDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ManageUser from "./components/Manage/ManageUser";
import Admin from "./pages/Admin";
import Login from "./components/user/Login";
import Register from "./components/user/Register";

function App() {
  const currentPath = window.location.pathname; 
  
  if (currentPath === "/admin") {
    return <Admin />;
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/manageproduct" element={<ManageProduct />} />
          <Route path="/manageuser" element={<ManageUser />} />
          <Route path="/manageuser" element={<ManageUser />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/order"
            element={
              <OrderProvider>
                <OrderManagementPage />
              </OrderProvider>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
