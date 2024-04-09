import { BaseColorVariant } from '@/shared/config';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: BaseColorVariant;
  variant?: 'outlined' | 'light';
};
