import { PropsWithChildren } from 'react';

export type PreloaderProps = PropsWithChildren & {
  isFetching: boolean;
};
