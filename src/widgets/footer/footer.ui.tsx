import { Navbar } from '@/shared/ui';
import { menu } from './footer.model';
import css from './footer.module.css';

export const Footer: React.FC = () => {
  return <Navbar className={css.footer} menu={menu} />;
};
