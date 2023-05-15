import { create } from "zustand";

export const useStore = create((set) => ({
  // Cart
  cart: {
    food: [],
  },

  // add to cat
  addFood: (data) => {
    set((state) => ({
      cart: {
        food: [...state.cart.food, data],
      },
    }));
  },

  // delete food
  removeFood: (index) =>
    set((state) => ({
      cart: {
        food: state.cart.food.filter((_, i) => i !== index),
      },
    })),

  // reset cart
  resetCart: () => {
    set(() => ({
      cart: {
        food: [],
      },
    }));
  },
}));
