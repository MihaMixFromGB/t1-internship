import { BaseColorVariant } from '@/shared/config';

export type HeadingProps = React.HTMLAttributes<HTMLHeadElement> & {
  tag: 'h1' | 'h2' | 'h3';
  color?: BaseColorVariant;
};

export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> & {
  color?: BaseColorVariant | 'low-muted' | 'muted';
  lead?: boolean;
};
