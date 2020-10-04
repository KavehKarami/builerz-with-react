import React from 'react';
import TopBar from "../components/TopBar"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Layout = (props) => {
  return (
    <div className="wrapper">
      <TopBar />
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;