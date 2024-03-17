import clsx from 'clsx';
import { HeadingProps, ParagraphProps } from './types';
import css from './typography.module.css';

export const Heading: React.FC<HeadingProps> = ({
  tag,
  color = 'primary',
  className,
  children,
}) => {
  const classes = clsx(
    {
      [css.h1Title]: tag === 'h1',
      [css.h2Title]: tag === 'h2',
      [css.h3Title]: tag === 'h3',
      [css[`text_${color}`]]: color,
    },
    className,
  );

  switch (tag) {
    case 'h1':
      return <h1 className={classes}>{children}</h1>;
    case 'h2':
      return <h2 className={classes}>{children}</h2>;
    case 'h3':
      return <h3 className={classes}>{children}</h3>;
    default:
      return null;
  }
};

export const Paragraph: React.FC<ParagraphProps> = ({
  color = 'primary',
  lead,
  className,
  children,
}) => {
  const classes = clsx(
    css.paragraph,
    {
      [css[`text_${color}`]]: color,
      [css['paragraph_lead']]: lead,
    },
    className,
  );

  return <p className={classes}>{children}</p>;
};
