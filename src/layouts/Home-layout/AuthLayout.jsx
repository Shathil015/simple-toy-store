import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="h-11/12 bg-base-200 min-h-screen mx-10">
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto my-3 py-5"></main>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
