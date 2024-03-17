import clsx from 'clsx';
import css from './set-tag.module.css';
import type { SetTagProps } from './set-tag.types';

export const SetTag: React.FC<SetTagProps> = ({ tag, active, toggle }) => {
  const classes = clsx(css.tag, {
    [css.active]: active,
  });

  return (
    <label className={classes}>
      {tag.label}
      <input
        type='radio'
        id={`filter-${tag.label}`}
        name='filter'
        value={tag.label}
        checked={active}
        onChange={() => toggle(tag.label)}
      />
    </label>
  );
};
