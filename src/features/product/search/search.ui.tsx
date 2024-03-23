import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import { PropsWithClassName } from '@/shared/model';
import { Button } from '@/shared/ui';
import css from './search.module.css';

export const SearchByTitle: React.FC<PropsWithClassName> = ({ className }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const [value, setValue] = useState(search ?? '');
  const [debouncedValue] = useDebounce(value.trim(), 1000);

  useEffect(() => {
    setSearchParams(prev => {
      if (debouncedValue) prev.set('search', debouncedValue);
      else prev.delete('search');
      return prev;
    });
  }, [debouncedValue, setSearchParams]);

  return (
    <div className={`${css.search} ${className}`}>
      <input
        className={css.search__input}
        type='text'
        placeholder='Search by title'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Button className={css.search__btn}>Search</Button>
    </div>
  );
};
