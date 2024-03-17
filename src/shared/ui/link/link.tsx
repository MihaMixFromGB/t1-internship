import clsx from 'clsx';
import css from './link.module.css';
import { LinkProps } from './types';

export const Link: React.FC<LinkProps> = ({
  href,
  color = 'secondary',
  children,
  className,
}) => {
  const classes = clsx(
    css.link,
    {
      [css[`link_${color}`]]: color,
    },
    className,
  );

  return (
    <a className={classes} href={href}>
      {children}
    </a>
  );
};
