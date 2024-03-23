import {
  createSlice,
  createEntityAdapter,
  isAnyOf,
  createSelector,
} from '@reduxjs/toolkit';
import {
  ShortInfo,
  getProducts,
  getProductsByCategory,
  searchProducts,
} from '@/entities/product';
import { api } from '@/shared/config';
import { Nullable } from '@/shared/model';

const catalogAdapter = createEntityAdapter<ShortInfo>();
const initialState = catalogAdapter.getInitialState({
  skip: 0,
  hasMore: true,
});

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    reset: state => {
      state.skip = initialState.skip;
      state.hasMore = initialState.hasMore;
    },
    showMore: state => {
      state.skip += 9;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      isAnyOf(
        getProducts.matchFulfilled,
        getProductsByCategory.matchFulfilled,
        searchProducts.matchFulfilled,
      ),
      (state, action) => {
        const { products, total, limit, skip } = action.payload;
        catalogAdapter.upsertMany(state, products);
        state.hasMore = limit + skip < total;
      },
    );
  },
});

export const { selectAll } = catalogAdapter.getSelectors();
export const selectProducts = createSelector(
  [
    (state: RootState) => selectAll(state.catalog),
    (state: RootState) => state.catalog.skip,
    (_state: RootState, category: Nullable<ShortInfo['category']>) => category,
    (
      _state: RootState,
      _category: Nullable<ShortInfo['category']>,
      search: Nullable<string>,
    ) => search,
  ],
  (products, skip, category, search) => {
    const limit = api.products.limit;

    if (category) {
      products = products.filter(p => p.category === category);
    }
    if (search) {
      products = products.filter(
        p => !!p.searchTag?.toLowerCase().match(search.toLowerCase()),
      );
    }

    return products.slice(0, skip + limit);
  },
);

export const { reset, showMore } = catalogSlice.actions;
