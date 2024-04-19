import { create } from 'zustand'

const useStore = create(set => ({
  catches: [], // Initial state should match the case of this key

         setCatches: newCatches => set(state => ({
             catches: newCatches // Consistent naming with the initial state key
  })),

  addCatches: catches => set(state => ({
    catches: [...state.catches, catches ] // Use correct argument name and access state.Catches
  }))
}))

export { useStore }
