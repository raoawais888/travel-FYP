import React from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import "./Admin.css";

const AdminMasterLayout = ({ children }) => {
  return (
    <>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <Header />
        <div className="app-main">
          <Sidebar />
          <div className="app-main__outer">
         

                  {/* content render  */}
                  {children}
                  {/* content render  */}




            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminMasterLayout;
