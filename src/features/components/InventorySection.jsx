import { Search } from "lucide-react";
import React from "react";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import InventoryHeader from "./InventoryHeader";

const InventorySection = () => {
  return (
    <section className="h-full col-span-5 flex flex-col border-r border-black bg-red-950">
      <InventoryHeader />

      <div className="grid grid-cols-6 bg-red-950 gap-5 px-2 lg:px-5 flex-1">
        <div className="col-span-1">
          <CategoryList />
        </div>
        <div className="col-span-5 relative">
          <div className="h-[1200px] lg:h-[880px] pr-2 overflow-y-auto overflow-x-hidden scrollbar scrollbar-thumb-stone-200 scrollbar-track-red-950 scrollbar-thumb-rounded-full">
            <ProductList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventorySection;
