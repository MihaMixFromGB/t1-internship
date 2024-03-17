import clsx from 'clsx';
import css from './container.module.css';
import { ContainerProps } from './container.types';

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
}) => {
  const classes = clsx(css.container, className);
  return <div className={classes}>{children}</div>;
};
