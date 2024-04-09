import clsx from 'clsx';
import { Button, ButtonProps } from '@/shared/ui';
import css from './apply-tags.module.css';

export const ApplyTags: React.FC<ButtonProps> = ({ className, onClick }) => {
  const classes = clsx(css.btn, className);

  return (
    <Button
      className={classes}
      color='secondary'
      onClick={onClick}
      aria-label='Apply a selected tag'
    >
      Apply
    </Button>
  );
};
