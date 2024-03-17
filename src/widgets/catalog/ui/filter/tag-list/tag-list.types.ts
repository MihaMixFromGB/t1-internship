import { Tag } from '@/entities/tag';

export type TagListProps = {
  current?: Tag['label'];
  toggle: (tag: Tag['label']) => void;
};
