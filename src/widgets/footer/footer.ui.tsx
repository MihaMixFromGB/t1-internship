import { Navbar } from '@/shared/ui';
import { useSmallScreen } from './footer.lib';
import { menu } from './footer.model';
import css from './footer.module.css';

export const Footer: React.FC = () => {
  const smallScreen = useSmallScreen();
  return <Navbar className={css.footer} menu={smallScreen ? [] : menu} />;
};
