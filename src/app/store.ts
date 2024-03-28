import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { catalogSlice } from '@/widgets/catalog';
import { quizSlice } from '@/entities/quiz';
import { productsApi, rtkQueryErrorLogger } from '@/shared/api';

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  [catalogSlice.name]: catalogSlice.reducer,
  [quizSlice.name]: quizSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsApi.middleware, rtkQueryErrorLogger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
