import useVoucherStore from "@/stores/useVoucherStore";
import React from "react";
import VoucherItem from "./VoucherItem";
import VoucherItemLoader from "./VoucherItemLoader";

const VoucherItemList = () => {
  const { items, hasHydrated } = useVoucherStore();

  if (!hasHydrated) {
    return <VoucherItemLoader />;
  }

  return (
    <div>
      {items.length === 0 ? (
        <div className="p-5">
          <div className="product-card border border-gray-300 overflow-hidden rounded-lg bg-gray-500 p-5 flex flex-col items-center justify-center">
            <img src="/empty.svg" className="h-[100px] mb-5" alt="png" />

            <p className="text-center">
              There is no item. <br />
              Click product to add in voucher
            </p>
          </div>
        </div>
      ) : (
        <div className="h-[600px] overflow-scroll overflow-x-hidden scrollbar scrollbar-thumb-stone-200 scrollbar-track-slate-800 scrollbar-thumb-rounded-full">
          {items.map((item) => (
            <VoucherItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default VoucherItemList;
