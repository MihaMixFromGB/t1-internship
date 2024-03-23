import { Variant } from '@/entities/quiz';

export type CheckVariantProps = {
  variant: Variant;
  onChange: () => void;
};
