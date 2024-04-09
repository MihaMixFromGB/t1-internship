import { useState } from 'react';
import { AccordionItem } from './accordion-item';
import css from './accordion.module.css';
import { AccordionProps, AccordionItem as IAccordionItem } from './types';

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [currentItem, setCurrentItem] = useState<IAccordionItem['title']>();

  const toggle = (itemTitle: IAccordionItem['title']) => {
    if (itemTitle === currentItem) {
      setCurrentItem(undefined);
      return;
    }
    setCurrentItem(itemTitle);
  };

  return (
    <ul className={css.accordion}>
      {items.map(item => (
        <li key={item.title}>
          <AccordionItem
            {...item}
            isShowDescription={currentItem === item.title}
            toggle={() => toggle(item.title)}
          />
        </li>
      ))}
    </ul>
  );
};
