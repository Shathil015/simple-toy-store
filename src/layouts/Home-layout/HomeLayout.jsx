import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import LeftAside from "../../components/homelayout/LeftAside";
import RightAside from "../../components/homelayout/RightAside";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto my-3">
      <header>
        <Header></Header>
        <section className="my-3">
          <Banner></Banner>
        </section>
      </header>
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 ">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6 ">
          <Outlet></Outlet>
        </section>

        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
