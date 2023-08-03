import React from "react";
import shoesList from "./data.json";
import ProductList from "./ProductList";
import ShoesDetail from "./ShoesDetail";

const ShopShoes = () => {

  return (
    
    <div className="container">
      <h1>ShopShoes</h1>
      <ProductList shoesList={shoesList} />
      <ShoesDetail />
    </div>
  );
};

export default ShopShoes;
