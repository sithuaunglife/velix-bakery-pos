import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const VoucherItemLoader = () => {
  return (
    <div className="space-y-6 p-3">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="rounded-xl border border-border bg-card p-1 dark"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">

              <div className="space-y-2">
                <Skeleton className="h-4 w-10 lg:w-32" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>

            <div className="flex flex-col items-end space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-24 rounded-md" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VoucherItemLoader;
