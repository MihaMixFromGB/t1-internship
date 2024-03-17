import css from './checkbox.module.css';
import { CheckboxProps } from './types';

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <label className={css.container}>
      {value}
      <input
        type='checkbox'
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className={css.checkmark}></span>
    </label>
  );
};
