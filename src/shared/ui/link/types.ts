import { BaseColorVariant } from '@/shared/config';

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  color?: BaseColorVariant;
  variant?: 'link' | 'button';
};
