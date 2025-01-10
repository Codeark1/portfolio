import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const Navbar: React.FC = () => {
  return (
    <Header className="bg-gray-800 text-white">
      <h2>Admin Dashboard</h2>
    </Header>
  );
};

export default Navbar;
