import clsx from 'clsx';
import css from './button.module.css';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  color = 'primary',
  variant,
  className,
  children,
  ...props
}) => {
  const classes = clsx(
    css.btn,
    {
      [css[`btn_${color}`]]: color && !variant,
      [css[`btn_${variant}_${color}`]]: color && variant,
    },
    className,
  );
  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
};
