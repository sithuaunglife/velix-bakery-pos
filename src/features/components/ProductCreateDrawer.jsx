"use client"
import useProductStore from '@/stores/useProductStore'
import { X } from 'lucide-react';
import React, { useState } from 'react'
import ProductCreateForm from './ProductCreateForm';

const ProductCreateDrawer = () => {
  const { productDrawerStatus, setProductDrawerStatus } = useProductStore();
  const handleClose = () => {
    setProductDrawerStatus(false)
  }
  return (
    <div
      className={`fixed top-0 left-0 z-40 h-screen w-[400px] bg-slate-900 duration-300 ${
        productDrawerStatus
          ? " translate-x-0 shadow-2xl "
          : " -translate-x-full"
      }`}
    >
      <div className=" flex justify-between items-start p-5 mb-5">
        <h3 className=" font-bold text-white text-xl ">Create New Product</h3>
        <X className="border-stone-600 bg-stone-500" onClick={handleClose} />
      </div>
      <ProductCreateForm />
    </div>
  );
}

export default ProductCreateDrawer