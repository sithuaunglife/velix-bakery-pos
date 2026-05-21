import { persist } from "zustand/middleware";

const { create } = require("zustand");

const useCategoryStore = create(persist((set) => {
  return {
    categories: [
      { id: 0, title: "All" },
      { id: 1, title: "Bread" },
      { id: 2, title: "Cake" },
      { id: 3, title: "Coffee" },
      { id: 4, title: "Smoothie" },
    ],
    activeCategory: "All",

    addCategory: (newCategory) =>
      set((oldState) => ({
        categories: [...oldState.categories, newCategory],
      })),

    selectCategory: (newCategory) => set({ activeCategory: newCategory }),
  };
}));

export default useCategoryStore;
