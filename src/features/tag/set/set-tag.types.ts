import type { Tag } from '@/entities/tag';

export type SetTagProps = {
  tag: Tag;
  active: boolean;
  toggle: (tag: Tag['label']) => void;
};
