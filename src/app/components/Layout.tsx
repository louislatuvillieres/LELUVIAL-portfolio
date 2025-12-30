import React, { ReactNode } from "react";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="container mx-auto lg:px-16">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
