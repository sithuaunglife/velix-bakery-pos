import useCategoryStore from "@/stores/useCategoryStore";
import React from "react";

export const CategoryBtn = ({
  category: { id, title }
}) => {
  const { activeCategory, selectCategory } = useCategoryStore();
  const isActive = title === activeCategory;
  const baseClasses =
    "duration-200 text-sm text-end px-4 py-2 rounded-lg hover:bg-stone-400 active:bg-blue-100 active:border-blue-400";
  const activeClasses = "bg-stone-400 border-blue-400 text-red-900";
  const inactiveClasses = "bg-transparent border-transparent text-white";

  const handleClick = () => {
    selectCategory(title);
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {title}
    </button>
  );
};

export default CategoryBtn;
