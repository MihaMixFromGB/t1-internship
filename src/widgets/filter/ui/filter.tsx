import clsx from 'clsx';
import { useState } from 'react';
import { ApplyTags, ResetTags } from '@/features/tag';
import type { Tag } from '@/entities/tag';
import { PropsWithClassName } from '@/shared/config';
import { anchors } from '@/shared/model';
import { Heading, Paragraph } from '@/shared/ui';
import css from './filter.module.css';
import { TagList } from './tag-list';

export const Filter: React.FC<PropsWithClassName> = ({ className }) => {
  const [current, setCurrent] = useState<Tag['label']>();

  const toggle = (tag: Tag['label']) => {
    setCurrent(tag === current ? undefined : tag);
  };

  const reset = () => setCurrent(undefined);

  const filterClasses = clsx(css.filter, className);

  return (
    <div className={filterClasses}>
      <Heading id={anchors.productSelection} tag='h3'>
        Selection by&nbsp;parameters
      </Heading>
      <Paragraph className={css.filter__field}>Category</Paragraph>
      <TagList current={current} toggle={toggle} />
      <ApplyTags className={css.filter__apply} />
      <ResetTags onClick={reset} />
    </div>
  );
};
