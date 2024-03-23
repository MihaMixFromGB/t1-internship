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
import { hasMoreProducts } from './catalog.lib';

const catalogAdapter = createEntityAdapter<ShortInfo>();
const initialState = catalogAdapter.getInitialState({
  skip: 0,
  hasMore: true,
  isFetching: false,
});

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    reset: state => {
      state.skip = initialState.skip;
    },
    showMore: state => {
      state.skip += 9;
    },
    toggleHasMore: state => {
      state.hasMore = !state.hasMore;
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        isAnyOf(
          getProducts.matchPending,
          getProductsByCategory.matchPending,
          searchProducts.matchPending,
        ),
        state => {
          state.isFetching = true;
        },
      )
      .addMatcher(
        isAnyOf(
          getProducts.matchFulfilled,
          getProductsByCategory.matchFulfilled,
          searchProducts.matchFulfilled,
        ),
        (state, action) => {
          const { products } = action.payload;
          catalogAdapter.upsertMany(state, products);
          state.hasMore = hasMoreProducts(action.payload);
          state.isFetching = false;
        },
      )
      .addMatcher(
        isAnyOf(
          getProducts.matchRejected,
          getProductsByCategory.matchRejected,
          searchProducts.matchRejected,
        ),
        state => {
          state.isFetching = false;
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

export const { reset, showMore, toggleHasMore } = catalogSlice.actions;
