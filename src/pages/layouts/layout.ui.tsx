import { PropsWithChildren } from 'react';
import { Navbar } from '@/shared/ui';
import css from './layout.module.css';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar
        className={css.layout__navbar}
        fixed
        menu={[{ label: 'Back to site' }]}
      />
      {children}
    </>
  );
};
