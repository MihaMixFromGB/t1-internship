import { PropsWithClassName } from '@/shared/config';

export type MenuItem = {
  label: string;
};

export type NavbarProps = PropsWithClassName & {
  menu: MenuItem[];
};
