import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import MyMain from "../components/Manage/Main";
import TopBar from "../components/PagesAdmin/TopBar";
import SidebarMenu from "../components/PagesAdmin/SidebarMenu";
import ManageProduct from "../components/Manage/ManageProduct";
import ManageUser from "../components/Manage/ManageUser";

function Admin() {
  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-100">
        {/* TopBar will take full width at the top */}
        <header className="w-full shadow-lg bg-white">
          <TopBar />
        </header>

        <div className="flex flex-1 lg:flex-row sm:flex-col overflow-hidden">
          {/* SidebarMenu for navigation, responsive */}
          <aside className="lg:w-1/4 sm:w-full bg-white shadow-md">
            <SidebarMenu />
          </aside>

          {/* Main Content adjusts based on the route */}
          <main className="flex-1 p-6 bg-gray-50 overflow-auto">
            <Routes>
              <Route path="/" element={<MyMain />} />
              <Route path="/about" element={<ManageUser />} /> {/* Fix the path */}
              <Route path="/products" element={<ManageProduct />} />
              {/* Add more routes as needed */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default Admin;
