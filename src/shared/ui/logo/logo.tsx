import { Link } from '../link';
import css from './logo.module.css';

export const Logo: React.FC = () => {
  return (
    <Link className={css.logo__label} href='/'>
      Goods4you
    </Link>
  );
};
