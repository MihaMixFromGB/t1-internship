import { Paragraph } from '../../typography';
import { AccordionItemProps } from '../types';
import css from './accordion-item.module.css';
import { IconToggle } from './icon-toggle';

export const AccordionItemHeader: React.FC<
  Pick<AccordionItemProps, 'title' | 'toggle'>
> = ({ title, toggle }) => {
  return (
    <header className={css.item__header} role='button' onClick={toggle}>
      <Paragraph className={css.accordionText} lead>
        {title}
      </Paragraph>
      <IconToggle />
    </header>
  );
};
