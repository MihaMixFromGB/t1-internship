import clsx from 'clsx';
import { SetTag } from '@/features/tag';
import { useCategories } from '@/entities/tag';
import css from './tag-list.module.css';
import { TagListProps } from './tag-list.types';

export const TagList: React.FC<TagListProps> = ({ current, toggle }) => {
  const tags = useCategories();

  const classes = clsx(css.tags, {
    [css.odd]: tags.length % 2,
  });

  return (
    <ul className={classes}>
      {tags.map(tag => (
        <li key={tag}>
          <SetTag tag={tag} active={tag === current} toggle={toggle} />
        </li>
      ))}
    </ul>
  );
};
