import clsx from 'clsx';
import { AccordionItemProps } from '../types';
import { AccordionItemBody } from './accordion-item-body';
import { AccordionItemHeader } from './accordion-item-header';
import css from './accordion-item.module.css';

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  description,
  isShowDescription,
  toggle,
}) => {
  const classes = clsx(css.item, {
    [css.item_open]: isShowDescription,
  });
  return (
    <article className={classes}>
      <AccordionItemHeader title={title} toggle={toggle} />
      <AccordionItemBody description={description} />
    </article>
  );
};
