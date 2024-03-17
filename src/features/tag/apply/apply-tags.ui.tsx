import clsx from 'clsx';
import { PropsWithClassName } from '@/shared/config';
import { Button } from '@/shared/ui';
import css from './apply-tags.module.css';

export const ApplyTags: React.FC<PropsWithClassName> = ({ className }) => {
  const classes = clsx(css.btn, className);

  return (
    <Button
      className={classes}
      color='secondary'
      aria-label='Apply a selected tag'
    >
      Apply
    </Button>
  );
};
