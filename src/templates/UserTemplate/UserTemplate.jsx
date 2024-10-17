import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/Categories";
import ProductList from "../../components/Product/ProductList";
import Footer from "../../components/Footer/Footer.jsx";
import NavigationBar from "../../components/NavigaionBar/NavigationBar";

const UserTemplate = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        {/* <Banner /> */}
        <Slider />
        {/* <NavigationBar /> */}
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <Categories />
      </div>
      <div className="mt-24 ">
      <ProductList />
     
      </div>
      </main>
      <Footer />
    </>
  );
};

export default UserTemplate;
