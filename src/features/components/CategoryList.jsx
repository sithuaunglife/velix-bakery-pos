"use client";
import React, { useState } from "react";
import CategoryBtn from "./CategoryBtn";
import useCategoryStore from "@/stores/useCategoryStore";
import CategoryAddBtn from "./CategoryAddBtn";

const CategoryList = () => {

  const {categories} = useCategoryStore ()

  return (
    <div>
      <div className="flex flex-col gap-3 mb-6">
        {categories.map((category) => (
          <CategoryBtn category={category} key={category.id} />
        ))}
      </div>
      <CategoryAddBtn />
    </div>
  );
};

export default CategoryList;
