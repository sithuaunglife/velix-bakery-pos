"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import useProductStore from "@/stores/useProductStore";
import useCategoryStore from "@/stores/useCategoryStore";
import ProductAddBtn from "./ProductAddBtn";

const ProductList = () => {
  const { filteredProducts, q } = useProductStore();
  const { activeCategory } = useCategoryStore();
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {filteredProducts(activeCategory, q).length === 0 && (
          <div className=" col-span-full">
            <div className="product-card border border-gray-300 overflow-hidden rounded-lg bg-gray-500 p-5 flex flex-col items-center justify-center">
              <img src="/empty.svg" className=" h-[100px] mb-5" alt="" />
              <p>There is no Product</p>
            </div>
          </div>
        )}
        {filteredProducts(activeCategory, q).map((el) => (
          <ProductCard product={el} key={el.id} />
        ))}
      </div>
      <ProductAddBtn />
    </div>
  );
};

export default ProductList;
