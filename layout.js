import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;