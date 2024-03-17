import clsx from 'clsx';
import { SetTag } from '@/features/tag';
import { useTags } from '@/entities/tag';
import css from './tag-list.module.css';
import { TagListProps } from './tag-list.types';

export const TagList: React.FC<TagListProps> = ({ current, toggle }) => {
  const tags = useTags();

  const classes = clsx(css.tags, {
    [css.odd]: tags.length % 2,
  });

  return (
    <ul className={classes}>
      {tags.map((tag, idx) => (
        <li key={`${tag.label}-${idx}`}>
          <SetTag tag={tag} active={tag.label === current} toggle={toggle} />
        </li>
      ))}
    </ul>
  );
};
