import { useFormContext } from 'react-hook-form';
import { InputProps } from '../edit.types';
import css from './edit.module.css';

export const Input: React.FC<InputProps> = ({ name, label, value }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const type = typeof value === 'number' ? 'number' : 'text';

  return (
    <div>
      <div className={css.input}>
        <label className={css.input__label} htmlFor={name}>
          {label}
        </label>
        <input
          className={css.input__value}
          type={type}
          defaultValue={value}
          {...register(name, { required: true })}
        />
      </div>
      {errors[name] && (
        <span className={css.input__error}>This field is required</span>
      )}
    </div>
  );
};
