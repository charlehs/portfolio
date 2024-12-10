"use client";
import React from "react";
import Time from "./Clock";

const Nav = () => {
  return (
    <nav className=" absolute w-[100%] px-4 border-b">
      <div className="flex justify-between">
        <div>CS</div>
        <Time />
      </div>
    </nav>
  );
};

export default Nav;
