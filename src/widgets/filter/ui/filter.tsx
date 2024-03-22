import clsx from 'clsx';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ApplyTags, ResetTags } from '@/features/tag';
import { anchors } from '@/shared/model';
import { Heading, Paragraph } from '@/shared/ui';
import { FilterProps } from '../filter.types';
import css from './filter.module.css';
import { TagList } from './tag-list';

export const Filter: React.FC<FilterProps> = ({ className, resetCatalog }) => {
  const [current, setCurrent] = useState<string>();
  const [searchParams, setSearchParams] = useSearchParams();

  /**
   * Способ исключить применение useEffect
   * https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
   */
  const presetCategory = searchParams.get('category');
  if (!current && presetCategory) {
    setCurrent(presetCategory);
  }

  const toggle = (tag: string) => {
    setCurrent(tag === current ? undefined : tag);
  };

  const apply = () => {
    if (!current) return;
    resetCatalog();
    setSearchParams(prev => {
      prev.set('category', current);
      return prev;
    });
  };

  const reset = () => {
    if (!current) return;
    resetCatalog();
    setSearchParams(prev => {
      prev.delete('category');
      return prev;
    });
    setCurrent(undefined);
  };

  const filterClasses = clsx(css.filter, className);

  return (
    <div className={filterClasses}>
      <Heading id={anchors.productSelection} tag='h3'>
        Selection by&nbsp;parameters
      </Heading>
      <Paragraph className={css.filter__field}>Category</Paragraph>
      <TagList current={current} toggle={toggle} />
      <ApplyTags className={css.filter__apply} onClick={apply} />
      <ResetTags onClick={reset} />
    </div>
  );
};
