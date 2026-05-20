import useVoucherStore from "@/stores/useVoucherStore";
import { Minus, Plus } from "lucide-react";
import React from "react";
import { toast } from "sonner";

const VoucherItem = ({
  item: {
    id,
    product: { title, price },
    quantity,
  },
}) => {
  const { updateQuantity, removeItem } = useVoucherStore();

  const handleClickAdd = () => {
    updateQuantity(id, 1);
  };

  const handleClickSub = () => {
    if (quantity > 1) {
      updateQuantity(id, -1);
    } else {
      if (confirm("Are you sure to remove Item?")) {
        removeItem(id);
        toast.error("Item remove successfully", {
          position: "top-center",
        });
      }
    }
  };

  return (
    <div className="order-card border-b border-gray-300 px-5 py-3">
      <div className="flex justify-between mb-2">
        <p className="text-sm text-white">{title}</p>
        <div className="flex gap-1 items-center">
          <button
            onClick={handleClickSub}
            className="bg-stone-500 border border-stone-600 rounded p-1 duration-200 active:scale-90"
          >
            <Minus className="lucide lucide-minus size-3 text-black" />
          </button>
          <p className="font-mono text-end w-5 text-sm text-white">{quantity}</p>
          <button
            onClick={handleClickAdd}
            className="bg-stone-500 border border-stone-600 rounded p-1 duration-200 active:scale-90"
          >
            <Plus className="lucide lucide-minus size-3 text-black" />
          </button>
        </div>
      </div>
      <div className="flex justify-between text-white">
        <div className="flex gap-2 items-center">
          <p className="text-sm font-mono">{quantity}</p>
          <p className="text-sm font-mono">x</p>
          <p className="text-sm font-mono">{price}</p>
        </div>
        <p className="text-sm font-mono">{quantity * price}</p>
      </div>
    </div>
  );
};

export default VoucherItem;
