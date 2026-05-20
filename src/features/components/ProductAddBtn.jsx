"use client"

import { Plus } from 'lucide-react';
import React from 'react'
import ProductCreateDrawer from './ProductCreateDrawer';
import useProductStore from '@/stores/useProductStore';

const ProductAddBtn = () => {
  const { setProductDrawerStatus } = useProductStore();
  const handleClick = () => {
    setProductDrawerStatus(true);
  }
  return (
    <div>
      <button
        onClick={handleClick}
        className="flex justify-center items-center absolute bottom-5 right-5 size-12 text-white bg-slate-900 rounded-full duration-200 active:scale-90"
      >
        <Plus />
      </button>
      <ProductCreateDrawer />
    </div>
  );
}

export default ProductAddBtn