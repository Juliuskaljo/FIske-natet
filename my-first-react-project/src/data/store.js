import { create } from 'zustand'

const useStore = create((set) => ({
  Catches: [], // Initial state should match the case of this key

  setCatches: (newCatches) => set((state) => ({
    Catches: newCatches // Consistent naming with the initial state key
  })),

  addCatch: (newCatch) => set((state) => ({
    Catches: [...state.Catches, newCatch] // Use correct argument name and access state.Catches
  }))
}))

export { useStore }
