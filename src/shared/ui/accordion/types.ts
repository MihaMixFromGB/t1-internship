export type AccordionItem = {
  title: string;
  description: string;
};

export type AccordionProps = {
  items: AccordionItem[];
};

export type AccordionItemProps = AccordionItem & {
  isShowDescription: boolean;
  toggle: () => void;
};
