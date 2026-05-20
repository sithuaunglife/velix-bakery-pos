import React from "react";
import Header from "./Header";
import InventorySection from "./InventorySection";
import VoucherSection from "./VoucherSection";

const HomePage = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900 flex flex-col">
      <Header />

      <div className="flex-1 grid grid-cols-7">
        <InventorySection />
        <VoucherSection />
      </div>
    </div>
  );
};

export default HomePage;
