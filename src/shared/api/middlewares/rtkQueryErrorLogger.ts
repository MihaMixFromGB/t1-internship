import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const rtkQueryErrorLogger: Middleware = () => next => action => {
  if (isRejectedWithValue(action)) {
    toast.error(
      typeof action.payload === 'string'
        ? action.payload
        : 'An unknown error, please try later',
    );
  }

  return next(action);
};
