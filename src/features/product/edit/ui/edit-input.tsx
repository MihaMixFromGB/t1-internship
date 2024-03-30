import { useFormContext } from 'react-hook-form';
import { InputProps } from '../edit.types';
import css from './edit.module.css';

export const Input: React.FC<InputProps> = ({
  type,
  name,
  label,
  step = 1,
  min = 0,
  max,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className={css.input}>
        <label className={css.input__label} htmlFor={name}>
          {label}
        </label>
        <input
          className={css.input__value}
          type={type}
          step={step}
          {...register(name, {
            required: true,
            min,
            max,
          })}
        />
      </div>
      {errors[name] && errors[name]?.type === 'required' && (
        <span className={css.input__error}>This field is required</span>
      )}
      {errors[name] && errors[name]?.type === 'min' && (
        <span
          className={css.input__error}
        >{`A value must be at least more then ${min}`}</span>
      )}
      {errors[name] && errors[name]?.type === 'max' && (
        <span
          className={css.input__error}
        >{`A value must be at least less then ${max}`}</span>
      )}
    </div>
  );
};
