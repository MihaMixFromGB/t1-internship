import { Button } from '@/shared/ui';
import css from './reset-tags.module.css';
import { ResetTagsProps } from './reset.tags.types';

export const ResetTags: React.FC<ResetTagsProps> = ({ onClick }) => {
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
