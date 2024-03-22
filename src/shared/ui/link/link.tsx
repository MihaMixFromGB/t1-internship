import clsx from 'clsx';
import { HashLink as RouterLink } from 'react-router-hash-link';
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

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <RouterLink
      className={classes}
      to={href ?? '#'}
      scroll={el => {
        scrollWithOffset(el);
      }}
    >
      {children}
    </RouterLink>
  );
};
