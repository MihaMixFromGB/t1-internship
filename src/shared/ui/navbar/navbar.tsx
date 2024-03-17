import clsx from 'clsx';
import { Logo } from '../logo';
import { NavbarMenu } from './navbar-menu';
import css from './navbar.module.css';
import { NavbarProps } from './types';

export const Navbar: React.FC<NavbarProps> = ({ menu, className }) => {
  const classes = clsx(css.navbar, className);

  return (
    <div className={classes}>
      <Logo />
      <NavbarMenu menu={menu} />
    </div>
  );
};
