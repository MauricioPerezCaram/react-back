import React from "react";
import { useState, useEffect } from "react";
import Bienvenida from "./Bienvenida";
import ProductosInicio from "./ProductosInicio";

const Main = () => {
  return (
    <div>
      <main className="flex-grow-1 w-100 d-flex flex-column">
        <Bienvenida />
        <ProductosInicio />
      </main>
    </div>
  );
};

export default Main;
