import clsx from 'clsx';
import css from './wrapper.module.css';
import { WrapperProps } from './wrapper.types';

export const Wrapper: React.FC<WrapperProps> = ({ className, children }) => {
  const classes = clsx(css.wrapper, className);
  return <div className={classes}>{children}</div>;
};
