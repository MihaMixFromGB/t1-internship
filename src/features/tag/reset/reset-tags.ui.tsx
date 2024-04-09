import { Button, ButtonProps } from '@/shared/ui';
import css from './reset-tags.module.css';

export const ResetTags: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <Button
      className={css.btn}
      variant='light'
      onClick={onClick}
      aria-label='Reset a selected tag'
    >
      Reset
    </Button>
  );
};
