import { Link } from '../link';
import css from './navbar.module.css';
import { NavbarProps } from './types';

export const NavbarMenu: React.FC<Pick<NavbarProps, 'menu'>> = ({ menu }) => {
  return (
    <nav className={css.navbar__menu}>
      {menu.map(item => (
        <Link key={item.label} href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
