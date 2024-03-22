import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { catalogSlice } from '@/widgets/catalog';
import { baseProductsApi } from '@/shared/api';

const rootReducer = combineReducers({
  [baseProductsApi.reducerPath]: baseProductsApi.reducer,
  [catalogSlice.name]: catalogSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseProductsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
