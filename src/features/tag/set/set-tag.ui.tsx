import clsx from 'clsx';
import css from './set-tag.module.css';
import type { SetTagProps } from './set-tag.types';

export const SetTag: React.FC<SetTagProps> = ({ tag, active, toggle }) => {
  const classes = clsx(css.tag, 'input-hidden', {
    [css.active]: active,
  });

  return (
    <label className={classes}>
      {tag}
      <input
        type='radio'
        id={`filter-${tag}`}
        name='filter'
        value={tag}
        checked={active}
        onChange={() => toggle(tag)}
      />
    </label>
  );
};
