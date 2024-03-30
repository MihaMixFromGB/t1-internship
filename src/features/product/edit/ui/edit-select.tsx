import { useFormContext } from 'react-hook-form';
import { SelectProps } from '../edit.types';
import css from './edit.module.css';

export const Select: React.FC<SelectProps> = ({ name, label, values }) => {
  const { register } = useFormContext();

  return (
    <div className={css.input}>
      <label className={css.input__label} htmlFor={`select-${name}`}>
        {label}
      </label>
      <div className={css.selectorWrapper}>
        <select
          id={`select-${name}`}
          className={`${css.input__value} ${css.selector}`}
          {...register(name)}
        >
          {values.map(value => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
