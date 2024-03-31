import { Link } from '../link';
import css from './navbar.module.css';
import { NavbarProps } from './types';

export const NavbarMenu: React.FC<Pick<NavbarProps, 'menu'>> = ({ menu }) => {
  return (
    <nav className={css.navbar__menuContainer}>
      <input id={css.navbar__menu_toggle} type='checkbox' />
      <label
        className={css.navbar__menu__buttonContainer}
        htmlFor={css.navbar__menu_toggle}
      >
        <div className={css.navbar__menu__button}></div>
      </label>
      <ul className={css.navbar__menu}>
        {menu.map(item => (
          <li>
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
