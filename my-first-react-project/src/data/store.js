import { create } from 'zustand';

const useStore = create((set) => ({
  catches: [],

  setCatches: (newCatches) => set({ catches: newCatches }),

  addCatches: (newCatches) => set((state) => ({ catches: [...state.catches, newCatches] })),
}));

export { useStore };
