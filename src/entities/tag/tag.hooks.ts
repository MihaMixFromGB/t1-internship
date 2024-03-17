import { tags } from '@/shared/api';
import { Tag } from './tag.types';

export const useTags = (): Tag[] => {
  return tags;
};
