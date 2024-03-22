import { PropsWithClassName } from '@/shared/config';

export type MenuItem = {
  label: string;
  href: string;
};

export type NavbarProps = PropsWithClassName & {
  menu: MenuItem[];
  fixed?: boolean;
};
