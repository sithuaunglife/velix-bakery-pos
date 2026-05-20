"use client"
import useVoucherStore from '@/stores/useVoucherStore'
import React from 'react'
import VoucherInfo from './VoucherInfo';
import VoucherItemList from './VoucherItemList';
import VoucherSummary from './VoucherSummary';
import VoucherCheckout from './VoucherCheckout';

const VoucherSection = () => {
  const { items } = useVoucherStore();
  return (
    <section className="h-full col-span-2 bg-slate-800 flex flex-col">
      <h1 className="p-3 text-xl font-semibold text-end text-white">
        Voucher List ({items.length})
      </h1>
      <VoucherInfo />
      <VoucherItemList />
      <VoucherSummary />
      <VoucherCheckout />
    </section>
  );
}

export default VoucherSection