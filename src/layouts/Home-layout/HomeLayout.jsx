import React from "react";
import Navbar from "../../components/header/Navbar";
import Banner from "../../components/main/Banner";
import Cart from "../../components/main/Cart";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto my-3">
      <section>
        <header>
          <Navbar></Navbar>
        </header>
      </section>
      <section>
        <main>
          <Banner></Banner>
          <Cart></Cart>
        </main>
      </section>
      <section>
        <Outlet></Outlet>
      </section>
      <section>
        <footer>
          <Footer></Footer>
        </footer>
      </section>
    </div>
  );
};

export default HomeLayout;
