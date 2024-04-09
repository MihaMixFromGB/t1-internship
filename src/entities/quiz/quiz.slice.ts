import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCategories } from '@/shared/api';
import { Quiz } from './quiz.types';

type QuizState = {
  category: Quiz;
};

const initialState: QuizState = {
  category: {
    question: 'What type of product are you considering?',
    variants: [],
  },
};

type ToggleStateArgs = {
  section: 'category';
  variant: string;
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    toggleState: (state, action: PayloadAction<ToggleStateArgs>) => {
      const { section, variant } = action.payload;
      const existVariant = state[section].variants.find(
        v => v.label === variant,
      );
      if (!existVariant) return;
      existVariant.status = !existVariant.status;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(getCategories.matchFulfilled, (state, action) => {
      state.category.variants = action.payload.map(tag => ({
        label: tag,
        status: false,
      }));
    });
  },
});

export const { toggleState } = quizSlice.actions;
