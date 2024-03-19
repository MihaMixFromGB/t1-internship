import { PropsWithClassName } from '@/shared/config';
import { Button } from '@/shared/ui';
import css from './search.module.css';

export const SearchByTitle: React.FC<PropsWithClassName> = ({ className }) => {
  return (
    <div className={`${css.search} ${className}`}>
      <input
        className={css.search__input}
        type='text'
        placeholder='Search by title'
      />
      <Button className={css.search__btn}>Search</Button>
    </div>
  );
};
