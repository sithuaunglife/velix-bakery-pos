"use client"
import useVoucherStore from "@/stores/useVoucherStore";
import { DollarSign } from "lucide-react";
import React from "react";
import { toast } from "sonner";

const ProductCard = ({ product: { id, title, image, price, category } }) => {
  const { items, addItem, updateQuantity } = useVoucherStore();
  const isExistedItem = items.find((item) => item.product.id === id);

  const handleClick = () => {
    if (isExistedItem) {
      updateQuantity(isExistedItem.id, 1);
    } else {
      const newItem = {
        id: Date.now(),
        product: { id, title, price },
        quantity: 1,
      };
      addItem(newItem);
      toast.success("Added to voucher",{position: "top-center",})
    }
  }

  return (
    <div>
      <div
        onClick={handleClick}
        className="relative product-card border border-gray-300 overflow-hidden rounded-lg bg-stone-300 duration-200 active:scale-95"
      >
        {isExistedItem && (
          <div className="absolute right-2 top-2 bg-white text-black rounded-full text-xs px-2 py-1">
            Added
          </div>
        )}
        <img src={image} alt="img" className="h-36 w-full object-cover" />
        <div className="p-4 flex flex-col h-[140px] border-t border-blue-100">
          <div>
            <span className="text-xs text-blue-900 bg-blue-50 border border-black rounded px-2 py-0.5">
              {category}
            </span>
          </div>

          <h5 className="text-sm my-2 line-clamp-2">{title}</h5>
          <div className="flex items-center gap-2 mt-auto">
            <DollarSign className="size-5" />
            <p className="text-sm">
              <span className="font-mono">{price} </span>
              Kyat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
