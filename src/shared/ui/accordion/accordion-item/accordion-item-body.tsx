import { Paragraph } from '../../typography';
import { AccordionItemProps } from '../types';
import css from './accordion-item.module.css';

export const AccordionItemBody: React.FC<
  Pick<AccordionItemProps, 'description'>
> = ({ description }) => {
  return (
    <div className={css.item__body}>
      <Paragraph className={css.accordionText} color='low-muted'>
        {description}
      </Paragraph>
    </div>
  );
};
