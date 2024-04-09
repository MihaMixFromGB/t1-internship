import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { Container } from '../container';
import { Logo } from '../logo';
import { Wrapper } from '../wrapper';
import { NavbarMenu } from './navbar-menu';
import css from './navbar.module.css';
import { NavbarProps } from './types';

export const Navbar: React.FC<NavbarProps> = ({
  fixed,
  menu,
  burger,
  className,
}) => {
  const [isScroll, setScroll] = useState(false);

  useEffect(() => {
    if (!fixed) return;

    function handleScroll() {
      setScroll(window.scrollY > 30);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fixed]);

  const classes = clsx(
    css.navbar,
    {
      [css.fixed]: fixed && isScroll,
    },
    className,
  );

  const wrapperClasses = clsx(css.navbarWrapper, {
    [css.center]: menu.length === 0,
  });

  return (
    <Container className={classes}>
      <Wrapper className={wrapperClasses}>
        <Logo />
        {menu.length > 0 && <NavbarMenu menu={menu} burger={burger} />}
      </Wrapper>
    </Container>
  );
};
