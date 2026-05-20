"use client"
import { Plus } from "lucide-react";
import React, { useState } from "react";
import CategoryCreateDrawer from "./CategoryCreateDrawer";

const CategoryAddBtn = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleClick = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div className="flex justify-center">
      <button onClick={handleClick} className="flex justify-start items-center gap-2 duration-200 active:scale-90">
        <Plus className="size-3 text-white" />
        <span className="text-white">Create</span>
      </button>

      <CategoryCreateDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </div>
  );
};

export default CategoryAddBtn;
