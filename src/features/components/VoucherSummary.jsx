import useVoucherStore from "@/stores/useVoucherStore";
import React from "react";

const VoucherSummary = () => {
  const { items } = useVoucherStore();
  const total = items.reduce((pv, cv) => 
       pv + cv.product.price * cv.quantity,0);
  const tax = total * 0.05;
  const netTotal = total + tax;
  return (
    <div className="p-5">
      <table className="w-full text-end text-sm font-mono">
        <tbody>
          <tr>
            <td className="py-1 text-white">Total : </td>
            <td className="py-1 text-white">{total}</td>
          </tr>
          <tr>
            <td className="py-1 text-white">Tax (5%) : </td>
            <td className="py-1 text-white">{tax}</td>
          </tr>
          <tr>
            <td className="py-1 text-white">Net Total : </td>
            <td className="py-1 text-white">{netTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VoucherSummary;
