/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";


function Home() {

  return (
    <>
      <header>
        <NavBar />
      </header>
      
      <Outlet />
    </>
  );
}

export default Home;
