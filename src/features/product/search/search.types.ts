import { PropsWithClassName } from '@/shared/model';

export type SearchProps = PropsWithClassName & {
  onSearch: () => void;
};
