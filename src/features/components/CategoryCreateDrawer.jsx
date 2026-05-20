"use client"
import { X } from "lucide-react";
import React from "react";
import CategoryCreateForm from "./CategoryCreateForm";

const CategoryCreateDrawer = ({ openDrawer, setOpenDrawer }) => {
  const handleClose = () => {
    setOpenDrawer(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 z-40 h-screen w-[400px] bg-slate-900 duration-300 ${
        openDrawer ? " translate-x-0 shadow-2xl " : " -translate-x-full"
      }`}
    >
          <div className="flex justify-between items-start p-5 mb-5">
              <h3 className="text-white text-2xl">Create New Category</h3>
              <X onClick={handleClose} className="border mt-auto border-stone-600 bg-stone-500"/>
          </div>
          <CategoryCreateForm setOpenDrawer={setOpenDrawer} />
    </div>
  );
};

export default CategoryCreateDrawer;
