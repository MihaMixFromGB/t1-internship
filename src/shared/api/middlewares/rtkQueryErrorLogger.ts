import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const rtkQueryErrorLogger: Middleware = () => next => action => {
  if (isRejectedWithValue(action)) {
    toast.error(
      'data' in action.error
        ? (action.error.data as { message: string }).message
        : action.error.message,
    );
  }

  return next(action);
};
