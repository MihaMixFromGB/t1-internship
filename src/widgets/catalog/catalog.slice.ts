import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShortInfo, ProductsResponse } from '@/entities/product';

type CatalogState = {
  products: ShortInfo[];
  skip: number;
  hasMore: boolean;
};

const initialState: CatalogState = {
  products: [],
  skip: 0,
  hasMore: false,
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductsResponse>) => {
      const {
        payload: { products, total, skip, limit },
      } = action;

      if (state.skip === 0) {
        state.products = products;
      } else {
        state.products = [...state.products, ...products];
      }

      state.hasMore = skip + limit < total;
    },
    reset: () => ({ ...initialState }),
    showMore: state => {
      state.skip += 9;
    },
  },
});

export const { add, reset, showMore } = catalogSlice.actions;
