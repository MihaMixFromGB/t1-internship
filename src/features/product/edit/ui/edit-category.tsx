import { useFormContext } from 'react-hook-form';
import { useCategories } from '@/entities/tag';
import css from './edit.module.css';

export const CategoriesSelector: React.FC = () => {
  const { data: categories } = useCategories();
  const { register } = useFormContext();

  return (
    <div className={css.input}>
      <label className={css.input__label} htmlFor='select-categories'>
        Category
      </label>
      <div className={css.edit__selectorWrapper}>
        <select
          id='select-categories'
          className={`${css.input__value} ${css.edit__selector}`}
          {...register('category')}
        >
          {categories.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
