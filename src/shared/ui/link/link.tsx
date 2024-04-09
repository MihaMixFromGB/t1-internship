import clsx from 'clsx';
import { HashLink as RouterLink } from 'react-router-hash-link';
import css from './link.module.css';
import { LinkProps } from './types';

export const Link: React.FC<LinkProps> = ({
  href,
  color = 'secondary',
  variant = 'link',
  children,
  className,
}) => {
  const classes = clsx(
    css.link,
    {
      [css[`link_${color}`]]: variant !== 'button' && color,
      [css['link_button']]: variant === 'button',
    },
    className,
  );

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = window.scrollY === 0 ? -140 : -80;
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
