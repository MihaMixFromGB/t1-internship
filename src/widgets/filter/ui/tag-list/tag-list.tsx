import clsx from 'clsx';
import { SetTag } from '@/features/tag';
import { useCategories } from '@/entities/tag';
import { Preloader } from '@/shared/ui';
import css from './tag-list.module.css';
import { TagListProps } from './tag-list.types';

export const TagList: React.FC<TagListProps> = ({ current, toggle }) => {
  const { data: tags, isFetching } = useCategories();

  const classes = clsx(css.tags, {
    [css.odd]: tags.length % 2,
  });

  return (
    <Preloader isFetching={isFetching}>
      <ul className={classes}>
        {tags.map(tag => (
          <li key={tag}>
            <SetTag tag={tag} active={tag === current} toggle={toggle} />
          </li>
        ))}
      </ul>
    </Preloader>
  );
};
