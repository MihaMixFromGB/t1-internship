import { useFormContext } from 'react-hook-form';
import { TextareaProps } from '../edit.types';
import css from './edit.module.css';

export const Textarea: React.FC<TextareaProps> = ({ name, label }) => {
  const { register, watch } = useFormContext();

  return (
    <div className={css.input}>
      <label className={css.input__label} htmlFor={`text-area-${name}`}>
        {label}
      </label>
      <div className={css.growWrapper} data-replicated-value={watch(name)}>
        <textarea
          className={css.input__value}
          id={`text-area-${name}`}
          {...register(name)}
        ></textarea>
      </div>
    </div>
  );
};
