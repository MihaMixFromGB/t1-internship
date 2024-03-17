import { Navbar } from '@/shared/ui';
import css from './footer.module.css';

const menu = [
  { label: 'Catalog' },
  { label: 'About us' },
  { label: 'Product selection' },
  { label: 'Our team' },
  { label: 'FAQ' },
];

export const Footer: React.FC = () => {
  return <Navbar className={css.footer} menu={menu} />;
};
