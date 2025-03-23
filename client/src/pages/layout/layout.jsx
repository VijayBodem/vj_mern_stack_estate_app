import React, { useContext, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./layout.scss";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

const RequireAuthLayout = () => {
  const { currentUser } = useContext(AuthContext);



  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export { Layout, RequireAuthLayout };
